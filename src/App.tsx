import React, { useRef } from 'react'
import AppLoading from 'expo-app-loading'
import { LogBox } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import theme from '~/config/theme'
import { RootStackParamList, Routes } from './routes'
import AppProvider from './hooks'

export default function App() {
  const navigation = useRef<NavigationContainerRef<RootStackParamList> | null>(null)
  const queryClient = new QueryClient()
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  LogBox.ignoreAllLogs()

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <NavigationContainer ref={navigation}>
            <ThemeProvider theme={theme}>
              <Routes />
            </ThemeProvider>
          </NavigationContainer>
        </AppProvider>
      </QueryClientProvider>
    )
  }
}
