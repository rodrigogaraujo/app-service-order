import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { H1 } from '~/components'

export const TitleLogin = styled(H1)`
  margin-top: ${RFValue(80)}px;
  margin-bottom: ${RFValue(80)}px;
`;

export const WrapperForm = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const WrapperButton = styled.View`
  margin-top: ${RFValue(48)}px
`;


