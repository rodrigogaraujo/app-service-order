import React from 'react'
import AppLoading from 'expo-app-loading'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { ThemeProvider } from 'styled-components'
import theme from '~/config/theme'
import { Home } from './screens/Home'

export default function App() {
  const queryClient = new QueryClient()
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </ThemeProvider>
    )
  }
}
