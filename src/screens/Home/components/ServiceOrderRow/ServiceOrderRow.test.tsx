import React from 'react'

import { ServiceOrderRow } from '.'
import { render, cleanup, waitFor } from '~/helpers'
import { serviceOrder } from './mock'

afterEach(cleanup)

describe('Home/ServiceOrderRow', () => {
  test('should be able to show a text to show service order', async () => {
    const { getByText, getByTestId } = render(<ServiceOrderRow serviceOrder={serviceOrder} />)

    const nameCustomer = getByText(/Snow/)
    expect(nameCustomer).toBeDefined()

    const priorityOrder = getByText(/Média/)
    expect(priorityOrder).toBeDefined()

    const statusOrder = await waitFor(() => getByTestId('status-priority-text'))
    expect(statusOrder).toBeDefined()

    const addressCustomer = getByText(/Av Maria Concebida Costa/)
    expect(addressCustomer).toBeDefined()
  })
})
