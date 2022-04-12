// if you use expo remove this line
import React from 'react'
import { AppRegistry } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import AsyncStorage from '@react-native-community/async-storage'

import './rn-addons'

import App from '../src/App'
import theme from '../src/config/theme'
import { Container } from './decorators/Container'

// enables knobs for all stories
addDecorator(withKnobs)
addDecorator(withBackgrounds)
addDecorator(Container)

// import stories
configure(() => {
  require('./storyLoader').loadStories()
}, module)

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
  onDeviceUI: true,
  resetStorybook: true,
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
AppRegistry.registerComponent('%APP_NAME%', () => StoryBookRoot)

export default console.tron.storybookSwitcher(StoryBookRoot)(App)
