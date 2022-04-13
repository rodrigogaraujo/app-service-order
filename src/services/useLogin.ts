import { AxiosError } from "axios"
import { useMutation, UseMutationOptions } from "react-query"
import { SignInCredentials } from "~/hooks/Auth"
import api from "./api"

export interface User {
  name: string
  email: string
  type: string
  active: boolean
}
  
type Payload = {
  token: { token: string } 
  user: User
}

export const useLogin = (options: UseMutationOptions<Payload, any, SignInCredentials>) => {
  return useMutation<Payload, AxiosError, SignInCredentials>(
    '/sessions',
    async ({email, password}) => {
      const resp = await api.post('/sessions', {
        email, password
      })
      return resp.data
    },
    options  
  )
}
 