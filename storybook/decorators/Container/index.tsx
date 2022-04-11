import React from 'react'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from '../../../src/config/theme'

export const Container = (storyFn: any) => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, padding: 40, justifyContent: 'center', alignItems: 'center' }}>
        {storyFn}
      </View>
    </ThemeProvider>
  )
}
