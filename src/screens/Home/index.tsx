import React, { useEffect } from 'react'
import OneSignal from 'react-native-onesignal'
import { ActivityIndicator, Alert, Dimensions, ScrollView, View } from 'react-native'
import { useTheme } from 'styled-components'
import Snackbar from 'react-native-snackbar'
import * as Sentry from '@sentry/react-native'

import { ONE_SIGNAL_KEY } from '@env'
import { useGetServiceOrders } from '~/services/useServiceOrder'
import { ServiceOrderRow } from './components/ServiceOrderRow'
import { SafeArea } from '~/components/SafeArea'
import { Container, H3 } from '~/components'
import { Button } from '~/components/Button'
import { useAuth } from '~/hooks/Auth'

export const Home = () => {
  const theme = useTheme()
  const { signOut } = useAuth()
  const { width, height } = Dimensions.get('window')
  const { isLoading, data, isError, error } = useGetServiceOrders()

  if (isError) {
    Alert.alert(
      ':(',
      `Houve um erro, ${
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error &&
        error.response.data.error.message
          ? error.response.data.error.message
          : 'tente novamente mais tarde.'
      }`
    )
    Sentry.captureException(error)
  }

  useEffect(() => {
    OneSignal.setAppId(ONE_SIGNAL_KEY)
    OneSignal.setLogLevel(6, 0)
    OneSignal.setRequiresUserPrivacyConsent(false)
    OneSignal.setNotificationWillShowInForegroundHandler((notifReceivedEvent) => {
      let notif = notifReceivedEvent.getNotification()
      Snackbar.show({
        text: `${notif.body}`,
        duration: Snackbar.LENGTH_LONG,
        textColor: theme.colors.white,
        backgroundColor: theme.colors.primary,
      })
      notifReceivedEvent.complete(notif)
    })
  }, [])

  return (
    <SafeArea>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {data && data.length && data.filter((item) => item.status !== 3).length ? (
          <Container>
            {isLoading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ActivityIndicator color={theme.colors.primary} size='large' />
              </View>
            ) : (
              <>
                {data && data.length
                  ? data
                      .filter((item) => item.status !== 3)
                      .map((item) => <ServiceOrderRow key={item._id} serviceOrder={item} />)
                  : null}
              </>
            )}
          </Container>
        ) : isLoading ? null : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height,
              width,
              padding: 30,
            }}
          >
            <H3 color='primary'>Sem ordem de serviço no momento</H3>
            <Button
              style={{ marginTop: 'auto' }}
              text='Sair'
              loading={false}
              onPress={() => signOut()}
            />
          </View>
        )}
      </ScrollView>
    </SafeArea>
  )
}
