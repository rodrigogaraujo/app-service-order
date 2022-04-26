import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { H3 } from '~/components';

export const Container = styled.TouchableOpacity.attrs({
})`
  border-bottom-color: ${({theme}) => theme.colors.gray_secondary};
  border-bottom-width: 1px;
  width: 100%;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const StyedH3 = styled(H3)`
  margin-top: ${RFValue(4)}px;
`;
