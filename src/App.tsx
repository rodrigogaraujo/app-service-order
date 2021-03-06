import React, { useRef } from 'react'
import AppLoading from 'expo-app-loading'
import { LogBox } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import * as Sentry from '@sentry/react-native'

import { SENTRY_DSN } from '@env'

import theme from '~/config/theme'
import { RootStackParamList, Routes } from './routes'
import AppProvider from './hooks'

export const queryClient = new QueryClient()
function App() {
  const navigationApp = useRef<NavigationContainerRef<RootStackParamList> | null>(null)
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  Sentry.init({
    dsn: SENTRY_DSN,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
  })

  LogBox.ignoreAllLogs()

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <NavigationContainer ref={navigationApp}>
            <ThemeProvider theme={theme}>
              <Routes />
            </ThemeProvider>
          </NavigationContainer>
        </AppProvider>
      </QueryClientProvider>
    )
  }
}

export default Sentry.wrap(App)
