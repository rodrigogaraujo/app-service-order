import React from 'react'

import { LineEmoji } from '.'
import { render } from '~/helpers'

describe('Login/LineEmoji', () => {
  test('should be able to show a text to user', () => {
    const { getByText } = render(<LineEmoji text={'Faça login com seu email e senha'} />)

    const textLogin = getByText(/Faça login com seu email e senha/)
    expect(textLogin).toBeDefined()
  })
})
