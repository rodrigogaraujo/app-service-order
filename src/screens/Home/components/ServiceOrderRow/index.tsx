import React from 'react'

import { H2 } from '~/components'
import { IServiceOrder } from '~/types'
import { Container, StyedH3 } from './styles'

interface IProps {
  serviceOrder: IServiceOrder
}

export const ServiceOrderRow = ({ serviceOrder }: IProps) => {
  const handlePriority = (number: number) => {
    switch (number) {
      case 1:
        return 'Baixa'
      case 2:
        return 'Média'
      default:
        return 'Alta'
    }
  }

  const handleStatus = (number: number) => {
    switch (number) {
      case 1:
        return 'Aguardando'
      case 2:
        return 'Em progresso'
      default:
        return 'Finalizada'
    }
  }

  return (
    <Container>
      <StyedH3>{serviceOrder?.customer?.name}</StyedH3>
      <StyedH3>{serviceOrder?.customer?.phone_number}</StyedH3>
      {serviceOrder?.customer?.address?.street && (
        <StyedH3>
          {serviceOrder?.customer?.address?.street}
          {serviceOrder?.customer?.address?.number
            ? `, ${serviceOrder?.customer?.address?.number}`
            : ''}
        </StyedH3>
      )}
      {serviceOrder?.customer?.address?.city && (
        <StyedH3>{serviceOrder?.customer?.address?.city}</StyedH3>
      )}
      <H2 color='primary'>
        {handlePriority(serviceOrder.priority)} - {handleStatus(serviceOrder.status)}
      </H2>
    </Container>
  )
}
