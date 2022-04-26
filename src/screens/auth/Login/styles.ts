import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { H1 } from '~/components'

export const TitleLogin = styled(H1)`
  margin-top: ${RFValue(72)}px;
  margin-bottom: ${RFValue(72)}px;
`;

export const WrapperForm = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const WrapperButton = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(24)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonForgotPass = styled.TouchableOpacity`
  margin-bottom: ${RFValue(24)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
