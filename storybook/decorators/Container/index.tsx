import React from 'react'
import { DecoratorFunction } from '@storybook/addons'
import { ContainerCentered } from '../../../src/components/ContainerCentered'
import { SafeArea } from '../../../src/components/SafeArea'

export const Container: DecoratorFunction = (storyFn: any) => {
  return (
    <SafeArea>
      <ContainerCentered>{storyFn()}</ContainerCentered>
    </SafeArea>
  )
}
