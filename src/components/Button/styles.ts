import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  min-width:  ${RFValue(150)}px;
  height: ${RFValue(56)}px;
  border-radius:  ${({theme}) => theme.radius};
  padding: ${RFValue(16)}px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  width: 100%;
  color: ${({theme}) => theme.colors.white};
  font-size:${({theme}) => theme.font.sizes.medium};
  font-family: ${({theme}) => theme.font.bold};
  text-align: center;
`;
