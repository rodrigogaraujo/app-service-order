import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Snackbar from 'react-native-snackbar'
import { useTheme } from 'styled-components'
import * as Sentry from '@sentry/react-native'

import { SignInCredentials, useAuth } from '~/hooks/Auth'
import { Container, Label } from '~/components'
import { Input } from '~/components/Input'
import { SafeArea } from '~/components/SafeArea'
import { LineEmoji } from './components/LineEmoji'
import {
  TitleLogin,
  WrapperButton,
  ButtonCreateAccount,
  WrapperForm,
  ButtonForgotPass,
} from './styles'
import { Button } from '~/components/Button'
import { useLogin } from '~/services/useLogin'
import { ScrollView } from 'react-native'

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
      setLoading(false)
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
      setLoading(false)
      Sentry.captureException(er)
    },
  })

  return (
    <SafeArea>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
              <ButtonForgotPass>
                <Label>Esqueceu sua senha?</Label>
              </ButtonForgotPass>
              <Button
                text='Entrar'
                loading={loading}
                onPress={handleSubmit(onSubmit)}
                testID='login-button'
              />
            </WrapperButton>
            <ButtonCreateAccount>
              <Label>Não possui conta? </Label>
              <Label color='primary'>Crie a sua aqui</Label>
            </ButtonCreateAccount>
          </WrapperForm>
        </Container>
      </ScrollView>
    </SafeArea>
  )
}
