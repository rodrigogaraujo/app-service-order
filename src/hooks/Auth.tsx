import AsyncStorage from '@react-native-community/async-storage'
import React, { createContext, useContext, useEffect, useState } from 'react'
import OneSignal from 'react-native-onesignal'
import * as Sentry from '@sentry/react-native'

import api from '~/services/api'
import { User } from '~/services/useLogin'

interface AuthState {
  token: string
  user: any
}

export interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: any
  loading: boolean
  token: string
  loadAll(): Promise<void>
  signOut(): void
  signIn(token: string, user: User): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used whitin an AuthProvider')
  }

  return context
}

export const AuthProvider: React.FC = ({ children }: any) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  async function loadStoragedData(): Promise<void> {
    const [token, user]: any = await AsyncStorage.multiGet([
      '@serviceOrder:token',
      '@serviceOrder:user',
    ])

    if (token[1] && user[1]) {
      const usr = JSON.parse(user[1])
      setData({ token: token[1], user: usr })
      api.defaults.headers.common['Authorization'] = `Bearer ${token[1]}`
    }
    setLoading(false)
  }

  const signIn = async (token: string, user: User) => {
    await AsyncStorage.multiSet([
      ['@serviceOrder:token', token],
      ['@serviceOrder:user', JSON.stringify(user)],
    ])
    setData({ token, user })

    const oneSignalResp = await OneSignal.getDeviceState()
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      await api.put(
        `/user-token/${user._id}`,
        {
          device_token: oneSignalResp?.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (er) {
      console.log(er)
      Sentry.captureException(er)
    }
  }

  const signOut = async () => {
    await AsyncStorage.multiRemove(['@serviceOrder:token', '@serviceOrder:user'])
    setData({} as AuthState)
    setLoading(false)
  }

  useEffect(() => {
    loadStoragedData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        token: data.token,
        loadAll: loadStoragedData,
        signOut,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
