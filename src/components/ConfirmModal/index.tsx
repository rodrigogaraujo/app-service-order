import React from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { H2 } from '..'
import { Button } from '../Button'
import { BodyText, ButtonText } from './styles'

interface IModalProps {
  onChangeVisible: () => void
  transparent: boolean
  modalIsVisible: boolean
  title: string
  text: string
  height: number
  action: () => void
}

export default function ConfirmModal({
  onChangeVisible,
  transparent,
  modalIsVisible,
  title,
  text,
  height,
  action,
}: IModalProps) {
  return (
    <Modal
      animationType='slide'
      transparent={transparent}
      visible={modalIsVisible}
      onRequestClose={() => {
        onChangeVisible()
      }}
    >
      <View
        style={{
          backgroundColor: '#0008',
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            backgroundColor: '#fff',
            justifyContent: 'flex-end',
            height: RFValue(height),
            padding: RFValue(30),
          }}
        >
          <H2 color='primary'>{title}</H2>

          <BodyText>{text}</BodyText>

          <Button loading={false} text='Confirmar' onPress={action} />
          <TouchableOpacity
            style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              onChangeVisible()
            }}
          >
            <ButtonText align='center' fullWidth color='primary'>
              Cancelar
            </ButtonText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
