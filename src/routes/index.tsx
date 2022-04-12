import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '~/screens/Home'
import { Login } from '~/screens/Login'

export type RootStackParamList = {
  Login: undefined
  Home: undefined
}
const RootStack = createNativeStackNavigator<RootStackParamList>()

export const Routes = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <RootStack.Screen name='Login' component={Login} />
      <RootStack.Screen name='Home' component={Home} />
    </RootStack.Navigator>
  )
}
