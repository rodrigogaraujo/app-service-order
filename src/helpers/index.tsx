import React, { FC, ReactElement, useRef } from 'react'
import { render, RenderOptions } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { QueryClientProvider } from 'react-query'

import { queryClient } from '~/App'
import AppProvider from '~/hooks'
import theme from '~/config/theme'
import { RootStackParamList } from '~/routes'

const AllTheProviders: FC = ({ children }: any) => {
  const navigationApp = useRef<NavigationContainerRef<RootStackParamList> | null>(null)
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <NavigationContainer ref={navigationApp}>{children}</NavigationContainer>
        </AppProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'
export { customRender as render }
