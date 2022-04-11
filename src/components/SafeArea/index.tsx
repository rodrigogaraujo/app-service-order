import React from 'react'
import { SafeAreaView } from './style'

interface IProps {
  children: JSX.Element
}

export const SafeArea = ({ children }: IProps) => {
  return <SafeAreaView>{children}</SafeAreaView>
}
