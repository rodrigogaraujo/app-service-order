import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { H2, H3 } from '~/components';

interface IProps {
  removeMargin?: boolean
  hasBg?: boolean
  bgBlue?: boolean
}

export const WrapperDescriptionServiceOrder = styled.View.attrs({
  elevation: 2,
})`
  padding: ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.gray_secondary};
  border-radius: ${({theme}) => theme.radius};
  margin-top: ${RFValue(16)}px;
`;

export const StyedH3 = styled(H3)<IProps>`
  margin-top: ${({removeMargin}) => removeMargin ? 0 : RFValue(16)}px;
`;

export const StyedH2 = styled(H2)`
`;

export const ButtonIcon = styled.TouchableOpacity.attrs({
  elevation: 2,
})<IProps>`
  padding: ${RFValue(8)}px;
  background-color: ${({theme, hasBg, bgBlue}) => hasBg && bgBlue ? 'blue' : hasBg ? theme.colors.secondary : theme.colors.primary};
  border-radius: ${({theme}) => theme.radius};
  margin-top: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

 