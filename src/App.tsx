import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Home } from './screens/Home'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return <Home />
  }
}
