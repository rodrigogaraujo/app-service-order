import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      primary_light: string,
      secondary: string,
      gray: string,
      gray_secondary: string,
      dark: string,
      white: string,
    },
    font: {
      regular: string,
      bold: string,
      sizes: {
        small: string,
        regular: string,
        medium: string,
        bigger_light: string,
        bigger: string,
      },
    },
    radius: string,
  }
}
