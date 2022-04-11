import React from 'react'
import { View } from 'react-native'

interface ICenterView {
  children: JSX.Element
}

export default function CenterView({ children }: ICenterView) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}
    >
      {children}
    </View>
  )
}
