import React, { useState } from 'react'
import { ScrollView, Linking } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import Snackbar from 'react-native-snackbar'
import { useNavigation } from '@react-navigation/native'

import { SafeArea } from '~/components/SafeArea'
import { Container, H2 } from '~/components'
import { RootStackParamList } from '~/routes'
import { handlePriority, handleStatus } from '../Home/components/ServiceOrderRow'
import { WrapperDescriptionServiceOrder, StyedH3, StyedH2, ButtonIcon } from './styles'
import ConfirmModal from '~/components/ConfirmModal'
import { useUpdateServiceOrderStatus } from '~/services/useServiceOrder'

type ServiceOrderProps = NativeStackScreenProps<RootStackParamList, 'ServiceOrder'>

export const ServiceOrder = ({ route }: ServiceOrderProps) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisibleRunning, setModalVisibleRunning] = useState(false)

  const onChangeModalVisible = () => setModalVisible(!modalVisible)

  const onChangeModalVisibleRunning = () => setModalVisibleRunning(!modalVisibleRunning)

  const handleUpdateStatus = async (status: number) => {
    updateStatus.mutate({ ...route.params.serviceOrder, status })
  }

  const updateStatus = useUpdateServiceOrderStatus({
    onSuccess: async () => {
      navigation.goBack()
    },
    onError: (er) => {
      Snackbar.show({
        text:
          er &&
          er.response &&
          er.response.data &&
          er.response.data.error &&
          er.response.data.error.message
            ? er.response.data.error.message
            : 'Houve um erro, tente novamente mais tarde.',
        duration: Snackbar.LENGTH_LONG,
        textColor: theme.colors.white,
        backgroundColor: theme.colors.secondary,
      })
    },
  })

  return (
    <SafeArea>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Container>
          <H2
            color={route.params.serviceOrder.priority === 3 ? 'secondary' : 'primary'}
            align='center'
            fullWidth
          >
            {handlePriority(route.params.serviceOrder.priority)} -{' '}
            {handleStatus(route.params.serviceOrder.status)}
          </H2>
          <WrapperDescriptionServiceOrder>
            <StyedH3 removeMargin color='white'>
              Cliente
            </StyedH3>
            <StyedH2 color='white'>{route.params.serviceOrder.customer?.name}</StyedH2>
            <StyedH3 color='white'>Telefone</StyedH3>
            <StyedH2 color='white'>{route.params.serviceOrder.customer?.phone_number}</StyedH2>
            {route.params.serviceOrder.customer?.email && (
              <>
                <StyedH3 color='white'>Email</StyedH3>
                <StyedH3 removeMargin color='white'>
                  {route.params.serviceOrder.customer?.email}
                </StyedH3>
              </>
            )}
          </WrapperDescriptionServiceOrder>
          {route.params.serviceOrder.customer?.address?.street && (
            <WrapperDescriptionServiceOrder>
              <StyedH3 removeMargin color='white'>
                Endereço
              </StyedH3>
              <StyedH3 removeMargin color='white'>
                {route.params.serviceOrder.customer?.address?.street}
                {route.params.serviceOrder?.customer?.address?.number
                  ? `, ${route.params.serviceOrder?.customer?.address?.number}`
                  : ''}
              </StyedH3>
              {route.params.serviceOrder.customer?.address?.city && (
                <>
                  <StyedH3 color='white'>Cidade</StyedH3>
                  <StyedH2 color='white'>
                    {route.params.serviceOrder.customer?.address?.city}
                    {route.params.serviceOrder?.customer?.address?.state
                      ? ` - ${route.params.serviceOrder?.customer?.address?.state}`
                      : ''}
                  </StyedH2>
                </>
              )}
            </WrapperDescriptionServiceOrder>
          )}
          <WrapperDescriptionServiceOrder>
            <StyedH3 removeMargin color='white'>
              Descrição
            </StyedH3>
            <StyedH2 color='white'>{route.params.serviceOrder?.description}</StyedH2>
          </WrapperDescriptionServiceOrder>
          {route.params.serviceOrder.customer?.phone_number && (
            <ButtonIcon
              onPress={() => {
                Linking.openURL(
                  `whatsapp://send?text=Olá&phone=${route.params.serviceOrder.customer?.phone_number}`
                )
              }}
            >
              <FontAwesome
                name='whatsapp'
                size={RFValue(24)}
                color={theme.colors.white}
                style={{ marginRight: 8 }}
              />
              <StyedH3 removeMargin color='white'>
                Enviar whats
              </StyedH3>
            </ButtonIcon>
          )}
          {route.params.serviceOrder.customer?.address?.street && (
            <ButtonIcon>
              <FontAwesome
                name='map'
                size={RFValue(24)}
                color={theme.colors.white}
                style={{ marginRight: 8 }}
              />
              <StyedH3 removeMargin color='white'>
                Abrir no mapa
              </StyedH3>
            </ButtonIcon>
          )}
          {route.params.serviceOrder.status === 1 && (
            <ButtonIcon hasBg bgBlue onPress={onChangeModalVisibleRunning}>
              <FontAwesome5
                name='running'
                size={RFValue(24)}
                color={theme.colors.white}
                style={{ marginRight: 8 }}
              />
              <StyedH3 removeMargin color='white'>
                Iniciar Atendimento
              </StyedH3>
            </ButtonIcon>
          )}
          {route.params.serviceOrder.status === 2 && (
            <ButtonIcon hasBg onPress={onChangeModalVisible}>
              <FontAwesome
                name='close'
                size={RFValue(24)}
                color={theme.colors.white}
                style={{ marginRight: 8 }}
              />
              <StyedH3 removeMargin color='white'>
                Finalizar OS
              </StyedH3>
            </ButtonIcon>
          )}
        </Container>
        <ConfirmModal
          onChangeVisible={onChangeModalVisible}
          modalIsVisible={modalVisible}
          transparent
          title='Deseja continuar?'
          text='Esta ação não tem volta, caso confirme a finalização da ordem de serviço apenas o administrador poderá ativa-la novamente.'
          height={300}
          action={() => handleUpdateStatus(3)}
        />
        <ConfirmModal
          onChangeVisible={onChangeModalVisibleRunning}
          modalIsVisible={modalVisibleRunning}
          transparent
          title='Deseja continuar?'
          text='Esta ação não tem volta, caso confirme o inicio do atendimento da ordem de serviço apenas o administrador poderá altera-la novamente.'
          height={300}
          action={() => handleUpdateStatus(2)}
        />
      </ScrollView>
    </SafeArea>
  )
}
