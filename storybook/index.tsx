// if you use expo remove this line
import React from 'react'
import { AppRegistry } from 'react-native'

import { getStorybookUI, configure, addDecorator, addParameters } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import AsyncStorage from '@react-native-community/async-storage'

import './rn-addons'

import App from '../src/App'
import theme from '../src/config/theme'
import { ThemeProvider } from 'styled-components/native'

// enables knobs for all stories
addDecorator(withKnobs)
addDecorator(withBackgrounds)

// import stories
configure(() => {
  require('./stories')
}, module)

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
  onDeviceUI: true,
})

const StoryBookRoot = () => {
  return (
    <ThemeProvider theme={theme}>
      <StorybookUIRoot />
    </ThemeProvider>
  )
}

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export default console.tron.storybookSwitcher(StoryBookRoot)(App)
