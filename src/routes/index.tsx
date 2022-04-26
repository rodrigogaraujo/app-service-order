import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '~/screens/Home'
import { Login } from '~/screens/auth/Login'
import { useAuth } from '~/hooks/Auth'
import { IServiceOrder } from '~/types'
import { ServiceOrder } from '~/screens/ServiceOrder'

export type RootStackParamList = {
  Login: undefined
  Home: undefined
  ServiceOrder: {
    serviceOrder: IServiceOrder
  }
}
const RootStack = createNativeStackNavigator<RootStackParamList>()

export const Routes = () => {
  const { user, token } = useAuth()
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {!user && !token ? (
        <>
          <RootStack.Screen name='Login' component={Login} />
        </>
      ) : (
        <>
          <RootStack.Screen name='Home' component={Home} />
          <RootStack.Screen name='ServiceOrder' component={ServiceOrder} />
        </>
      )}
    </RootStack.Navigator>
  )
}
