import { AxiosError } from 'axios'
import { useMutation, UseMutationOptions, useQuery,  } from 'react-query'
import { queryClient } from '~/App'
import { IServiceOrder } from '~/types'
import api from './api'

const getServiceOrderById = async (id: string) => {
  const response = await api.get(`service-order/${id}`)
  return response.data
}

const getServiceOrders = async () => {
  const response = await api.get(`service-order-by-user`)
  return response.data.map((serviceOrder: IServiceOrder, index: number) => {
    return { ...serviceOrder, id: index + 1 }
  })
}

export const useGetServiceOrder = (id: string) => {
  return useQuery<IServiceOrder, any, IServiceOrder>(
    '/service-order/id',
    async () => getServiceOrderById(id)
  )
}

export const useGetServiceOrders = () => {
  return useQuery<IServiceOrder[], any, IServiceOrder[]>(
    '/service-order',
    async () => getServiceOrders()
  )
}

export const useUpdateServiceOrderStatus = (options: UseMutationOptions<IServiceOrder, any, IServiceOrder>) => {
  return useMutation<IServiceOrder, AxiosError, IServiceOrder>(
    '/service-order-update-status',
    async (data) => {
      const resp = await api.put(`/service-order-status/${data._id}`, {
        ...data
      })
      queryClient.setQueriesData<IServiceOrder[]>('/service-order', (old) => {
        const newItem: IServiceOrder = resp.data
        const oldData: IServiceOrder[] = old?.filter(item => item._id !== newItem._id) as IServiceOrder[] 
        if (oldData.length) {
          return [...oldData, newItem]
        }
        return [newItem]
      })
      return resp.data
    },
    options
  )
}
