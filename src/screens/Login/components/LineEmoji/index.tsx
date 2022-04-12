import React from 'react'

import { View } from 'react-native'
import { EmojiSmille } from '~/assets/svgs/EmojiSmille'
import { ContainerRow, H3 } from '~/components'
import { ViewEmoji } from './styles'

interface IProps {
  text: string
}

export const LineEmoji = ({ text }: IProps) => {
  return (
    <ContainerRow align='flex-start'>
      <ViewEmoji>
        <EmojiSmille />
      </ViewEmoji>
      <H3 color='gray'>{text}</H3>
    </ContainerRow>
  )
}
