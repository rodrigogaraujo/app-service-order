import React, { useEffect } from 'react'
import OneSignal from 'react-native-onesignal'
import { ActivityIndicator, Alert, ScrollView } from 'react-native'
import { useTheme } from 'styled-components'

import { ONE_SIGNAL_KEY } from '@env'
import { useGetServiceOrders } from '~/services/useServiceOrder'
import { ServiceOrderRow } from './components/ServiceOrderRow'
import { SafeArea } from '~/components/SafeArea'
import { Container } from '~/components'

export const Home = () => {
  const theme = useTheme()

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
  }

  useEffect(() => {
    OneSignal.setAppId(ONE_SIGNAL_KEY)
    OneSignal.setLogLevel(6, 0)
    OneSignal.setRequiresUserPrivacyConsent(false)
    OneSignal.setNotificationWillShowInForegroundHandler((notifReceivedEvent) => {
      let notif = notifReceivedEvent.getNotification()
      const button = {
        text: 'Ok',
        onPress: () => {
          notifReceivedEvent.complete(notif)
        },
      }

      Alert.alert(notif.title ? notif.title : 'Service Order', notif.body, [button], {
        cancelable: true,
      })
    })
  }, [])

  return (
    <SafeArea>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Container>
          {isLoading ? (
            <ActivityIndicator color={theme.colors.primary} size='large' />
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
      </ScrollView>
    </SafeArea>
  )
}
