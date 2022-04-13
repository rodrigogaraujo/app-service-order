import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import {
  Container,
  TextInputStyled,
  IconStyled,
  TouchableOpacityStyled,
  IconStyledRelative,
  IconPasswordStyled,
} from './styles'

interface Props extends TextInputProps {
  hasValidation?: boolean
  error?: boolean
  value?: string
  password?: boolean
}

export const Input = ({ password, hasValidation, error, value, ...rest }: Props) => {
  const [showPass, setShowPass] = useState(password ? true : false)
  return (
    <Container>
      <TextInputStyled {...rest} value={value} secureTextEntry={showPass ? true : false} />
      {hasValidation && error && !password ? (
        <IconStyled type='error' name='close-circle' size={RFValue(20)} testID='input-error' />
      ) : null}
      {hasValidation && error && password ? (
        <IconPasswordStyled
          type='error'
          name='close-circle'
          size={RFValue(20)}
          testID='input-error-password'
        />
      ) : null}
      {hasValidation && !error && value && !password ? (
        <IconStyled name='check-circle' type='success' size={RFValue(20)} />
      ) : null}
      {password ? (
        <TouchableOpacityStyled onPress={() => setShowPass(!showPass)}>
          <IconStyledRelative name={showPass ? 'eye' : 'eye-off'} size={RFValue(20)} />
        </TouchableOpacityStyled>
      ) : null}
    </Container>
  )
}
