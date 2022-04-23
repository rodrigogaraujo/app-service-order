import React from 'react'
import { fireEvent, cleanup } from '@testing-library/react-native'

import { Login } from '.'
import { render } from '~/helpers'

describe('sign in screen', () => {
  test('should be able to login', () => {
    const { getByTestId, getByText } = render(<Login />)
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
    const { getByTestId, findByTestId } = render(<Login />)
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
    const { getByTestId, findByTestId } = render(<Login />)
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
