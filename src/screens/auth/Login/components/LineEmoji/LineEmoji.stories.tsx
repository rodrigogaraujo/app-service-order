import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'

import { LineEmoji } from '.'
import theme from '~/config/theme'

storiesOf('View/Login', module)
  .addParameters({
    component: LineEmoji,
    backgrounds: [
      { name: 'light', value: theme.colors.white, default: true },
      { name: 'dark', value: theme.colors.dark, default: true },
    ],
  })
  .add('Label normal', () => (
    <LineEmoji text={text('Content', 'Faça login com \nseu email e senha')} />
  ))
