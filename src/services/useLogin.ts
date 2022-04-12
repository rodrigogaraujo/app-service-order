import { AxiosError } from "axios"
import { useMutation, UseMutationOptions } from "react-query"
import { SignInCredentials } from "~/hooks/Auth"
import api from "./api"

export interface User {
  name: string
  email: string
  is_admin: boolean
}
  
type Payload = {
  token: { token: string } 
  user: User
}

export const useLogin = (options: UseMutationOptions<Payload, any, SignInCredentials>) => {
  return useMutation<Payload, AxiosError, SignInCredentials>(
    '/session',
    async ({email, password}) => {
      const resp = await api.post('/session', {
        email, password
      })
      return resp.data
    },
    options  
  )
}
 