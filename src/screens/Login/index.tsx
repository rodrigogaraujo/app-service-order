import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Snackbar from 'react-native-snackbar'
import { useTheme } from 'styled-components'

import { SignInCredentials, useAuth } from '~/hooks/Auth'
import { Container } from '~/components'
import { Input } from '~/components/Input'
import { SafeArea } from '~/components/SafeArea'
import { LineEmoji } from './components/LineEmoji'
import { TitleLogin, WrapperButton, WrapperForm } from './styles'
import { Button } from '~/components/Button'
import { useLogin } from '~/services/useLogin'

export const Login = () => {
  const { signIn } = useAuth()
  const theme = useTheme()
  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: SignInCredentials) => {
    try {
      setLoading(true)
      const { email, password } = data
      login.mutate({ email, password })
      setLoading(false)
    } catch (er) {
      setLoading(false)
    }
  }

  const login = useLogin({
    onSuccess: async ({ user, token }) => {
      if (user.active) {
        await signIn(token.token, user)
      } else {
        Snackbar.show({
          text: 'Usuário inativo, fale com seu administrador.',
          duration: Snackbar.LENGTH_LONG,
          textColor: theme.colors.white,
          backgroundColor: theme.colors.secondary,
          fontFamily: theme.font.regular,
        })
      }
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
            : 'Email e senha incorretos',
        duration: Snackbar.LENGTH_LONG,
        textColor: theme.colors.white,
        backgroundColor: theme.colors.secondary,
        fontFamily: theme.font.regular,
      })
    },
  })

  return (
    <SafeArea>
      <Container>
        <TitleLogin color='primary'>{`Controle \nsuas ordens\nde serviço`}</TitleLogin>
        <LineEmoji text={`Faça seu login com \nseu email e senha`} />
        <WrapperForm>
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder='Seu email'
                accessibilityLabel='Seu email'
                testID='email'
                defaultValue=''
                value={value}
                hasValidation
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType='email-address'
                autoCapitalize='none'
                error={!!errors?.email}
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder='Sua senha'
                accessibilityLabel='Sua senha'
                testID='password'
                defaultValue=''
                autoCapitalize='none'
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                hasValidation
                error={!!errors?.password}
                password
              />
            )}
          />
          <WrapperButton>
            <Button
              text='Entrar'
              loading={loading}
              onPress={handleSubmit(onSubmit)}
              testID='login-button'
            />
          </WrapperButton>
        </WrapperForm>
      </Container>
    </SafeArea>
  )
}
