import React from 'react'
import { TouchableHighlight } from 'react-native'
import { TouchableHighlightProps } from 'react-native'

interface IButton extends TouchableHighlightProps {
  children: JSX.Element
}

export default function Button({ onPress, children }: IButton) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
}
