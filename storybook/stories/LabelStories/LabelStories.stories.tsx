import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { text, radios } from '@storybook/addon-knobs'

import { Label, H1 } from '../../../src/components'

import theme from '../../../src/config/theme'

storiesOf('Components/Label', module)
  .addParameters({
    component: Label,
    backgrounds: [
      { name: 'light', value: theme.colors.white, default: true },
      { name: 'dark', value: theme.colors.dark, default: true },
    ],
  })
  .add('Label normal', () => (
    <Label
      color={radios(
        'Label Color',
        {
          Primary: 'primary',
          'Primary Light': 'primary_light',
          Secondary: 'secondary',
          Gray: 'gray',
          'Gray Secondary': 'gray_secondary',
          Dark: 'dark',
        },
        'primary'
      )}
    >
      {text('Content', 'Label test')}
    </Label>
  ))
  .add('Title H1', () => <H1 color='primary'>{text('Content', 'Label test primary')}</H1>)
