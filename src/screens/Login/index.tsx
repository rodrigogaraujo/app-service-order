import React from 'react'

import { View } from 'react-native'
import { EmojiSmille } from '~/assets/svgs/EmojiSmille'
import { H1 } from '~/components'

export const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <H1 color='primary'>Login</H1>
      <EmojiSmille />
    </View>
  )
}
