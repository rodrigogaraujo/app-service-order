import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '~/config/theme'

const AllTheProviders: FC = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'
export { customRender as render }
