import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

type IconProps = { type: 'error' | 'success' }

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  padding: ${RFValue(16)}px 0;
  border-bottom-color: ${({theme}) => theme.colors.dark};
  border-bottom-width: 1px;
`;

export const TextInputStyled =  styled(TextInput).attrs(({theme}) => {
  placeholderTextColor: theme.colors.gray
})`
  flex: 1;
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.font.sizes.regular};
  font-family: ${({ theme }) => theme.font.regular};
  text-align: center;
`;

export const IconStyled = styled(Icon).attrs<IconProps>(({ theme, type }) => 
({ color: type === 'success' ? theme.colors.primary : theme.colors.secondary }))`
  position: absolute;
  right: ${RFValue(0)}px;
  top: ${RFValue(56 / 3)}px;
`;

export const IconPasswordStyled = styled(Icon).attrs<IconProps>(({ theme, type }) => 
({ color: type === 'success' ? theme.colors.primary : theme.colors.secondary }))`
  position: absolute;
  right: ${RFValue(0)}px;
  top: ${RFValue(56 / 3)}px;
`;

export const IconStyledRelative = styled(Icon).attrs(({ theme }) => ({ color: theme.colors.gray }))``;

export const TouchableOpacityStyled = styled.TouchableOpacity`
  position: absolute;
  right: ${RFValue(0)}px;
  top: ${RFValue(56 / 3)}px;
`;
