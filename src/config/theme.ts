import { RFValue } from "react-native-responsive-fontsize";

export default {
  colors: {
    primary: '#40B38C',
    primary_light: '#4DE6A6',
    secondary: '#E83F5B',
    gray: '#666666',
    gray_secondary: '#909996',
    dark: '#455250',
    white: '#FFFFFF',
  },
  font: {
    regular: 'Montserrat_400Regular',
    bold: 'Montserrat_700Bold',
    sizes: {
      small: `${RFValue(12)}px`,
      regular: `${RFValue(14)}px`,
      medium: `${RFValue(16)}px`,
      bigger_light: `${RFValue(22)}px`,
      bigger: `${RFValue(40)}px`,
    },
  },
  radius: `${RFValue(12)}px`,
};
