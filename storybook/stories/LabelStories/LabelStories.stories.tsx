import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { Label } from '../../../src/components'

import { text, optionsKnob } from '@storybook/addon-knobs'

import { Container } from '../../decorators/Container'
import theme from '../../../src/config/theme'

storiesOf('Components/Label', module)
  .addDecorator(Container)
  .addParameters({
    component: Label,
    backgrounds: [
      { name: 'light', value: theme.colors.white, default: true },
      { name: 'dark', value: theme.colors.dark, default: true },
    ],
  })
  .add('Label', () => (
    <Label
      color={optionsKnob(
        'Label Color',
        {
          Primary: 'primary',
          'Primary Light': 'primary_light',
          Secondary: 'secondary',
          Gray: 'gray',
          'Gray Secondary': 'gray_secondary',
          Dark: 'dark',
        },
        'primary',
        {
          display: 'inline-radio',
        }
      )}
    >
      {text('Content', 'Label test')}
    </Label>
  ))
  .add('Label primary', () => (
    <Label color='primary'>{text('Content', 'Label test primary')}</Label>
  ))
