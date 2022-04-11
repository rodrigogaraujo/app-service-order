import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native'

export const SafeAreaView = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}
`;
