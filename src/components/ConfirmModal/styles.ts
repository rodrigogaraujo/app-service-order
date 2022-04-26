import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { H3 } from '..';

export const BodyText = styled(H3)`
  margin: ${RFValue(16)}px 0;
`;

export const ButtonText = styled(H3)`
  margin: ${RFValue(16)}px 0;
  text-decoration: underline;
  text-decoration-color: ${({theme}) => theme.colors.primary};
`;
