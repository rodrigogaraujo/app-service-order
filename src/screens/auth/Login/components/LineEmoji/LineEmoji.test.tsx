import React from 'react'

import { LineEmoji } from '.'
import { render, waitFor } from '~/helpers'

describe('Login/LineEmoji', () => {
  test('should be able to show a text to user', async () => {
    const { getByTestId } = render(<LineEmoji text={'Faça login com seu email e senha'} />)

    const textLogin = await waitFor(() => getByTestId('text-description'))
    expect(textLogin).toBeDefined()
  })
})
