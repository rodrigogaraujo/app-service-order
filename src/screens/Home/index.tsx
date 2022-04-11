import React from 'react'

import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from '~/config/theme'
import { H1 } from '~/components'

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <H1 color='primary'>Teste</H1>
      </View>
    </ThemeProvider>
  )
}
