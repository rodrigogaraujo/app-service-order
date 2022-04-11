import React from 'react'
import { ContainerCenter } from './style'

interface IProps {
  children: JSX.Element
}

export const ContainerCentered = ({ children }: IProps) => {
  return <ContainerCenter>{children}</ContainerCenter>
}
