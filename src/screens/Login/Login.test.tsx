import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Login } from '.'
import { render, fireEvent } from '~/helpers'
import theme from '~/config/theme'

describe('sign in screen', () => {
  test('should be able to login', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    )
    const email = 'rodrigoaraujo990@gmail.com'
    const password = '12345678'

    const inputMail = getByTestId('email')
    expect(inputMail).toBeDefined()
    fireEvent.changeText(inputMail, email)

    const inputPassword = getByTestId('password')
    expect(inputPassword).toBeDefined()
    fireEvent.changeText(inputPassword, password)

    const buttonLogin = getByText('Entrar')
    fireEvent.press(buttonLogin)
  })

  test('should be able to show error to incorrect mail', async () => {
    const { getByTestId, findByTestId } = render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    )
    const email = 'rodrigoaraujo990'

    const inputMail = getByTestId('email')
    expect(inputMail).toBeDefined()
    fireEvent.changeText(inputMail, email)

    const buttonLogin = getByTestId('login-button')
    fireEvent.press(buttonLogin)

    const iconErrorInput = await findByTestId('input-error')
    expect(iconErrorInput).toBeDefined()
  })

  test('should be able to show error to empty pass', async () => {
    const { getByTestId, findByTestId } = render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    )
    const password = ''

    const inputPass = getByTestId('password')
    expect(inputPass).toBeDefined()
    fireEvent.changeText(inputPass, password)

    const buttonLogin = getByTestId('login-button')
    fireEvent.press(buttonLogin)

    const iconErrorInput = await findByTestId('input-error-password')
    expect(iconErrorInput).toBeDefined()
  })
})
