import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'

import { Input } from '.'
import theme from '~/config/theme'

storiesOf('Components/Input', module)
  .addParameters({
    component: Input,
    backgrounds: [
      { name: 'light', value: theme.colors.white, default: true },
      { name: 'dark', value: theme.colors.dark, default: true },
    ],
  })
  .add('Input normal', () => <Input value={text('Content', 'rodrigoaraujo990@gmail.com')} />)
  .add('Input password', () => <Input value={text('Content', '123456')} password />)
