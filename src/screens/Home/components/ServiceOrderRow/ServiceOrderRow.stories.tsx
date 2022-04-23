import React from 'react'

import { storiesOf } from '@storybook/react-native'

import { ServiceOrderRow } from '.'
import theme from '~/config/theme'
import { serviceOrder } from './mock'

storiesOf('View/Login', module)
  .addParameters({
    component: ServiceOrderRow,
    backgrounds: [
      { name: 'light', value: theme.colors.white, default: true },
      { name: 'dark', value: theme.colors.dark, default: true },
    ],
  })
  .add('Label normal', () => <ServiceOrderRow serviceOrder={serviceOrder} />)
