import React from 'react'

import { ServiceOrderRow } from '.'
import { render } from '~/helpers'
import { serviceOrder } from './mock'

describe('Home/ServiceOrderRow', () => {
  test('should be able to show a text to show service order', () => {
    const { getByText } = render(<ServiceOrderRow serviceOrder={serviceOrder} />)

    const nameCustomer = getByText(/Snow/)
    expect(nameCustomer).toBeDefined()

    const priorityOrder = getByText(/Média/)
    expect(priorityOrder).toBeDefined()

    const statusOrder = getByText(/Em progresso/)
    expect(statusOrder).toBeDefined()

    const addressCustomer = getByText(/Av Maria Concebida Costa/)
    expect(addressCustomer).toBeDefined()
  })
})
