import React from 'react'

import { storiesOf } from '@storybook/react-native'
import { text } from '@storybook/addon-knobs'

import { Button } from '.'
import theme from '~/config/theme'

storiesOf('Components/Button', module)
  .addParameters({
    component: Button,
    backgrounds: [
      { name: 'light', value: theme.colors.white, default: true },
      { name: 'dark', value: theme.colors.dark, default: true },
    ],
  })
  .add('Button normal', () => <Button text={text('Content', 'CONTINUAR')} loading={false} />)
  .add('Button loading', () => <Button text={text('Content', 'CONTINUAR')} loading={true} />)
