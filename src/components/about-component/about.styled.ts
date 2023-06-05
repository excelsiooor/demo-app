import styled from 'styled-components/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '@global/theme';

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Propertie = styled(View)`
  margin-top: 15px;
`;

export const StyledButton = styled(TouchableOpacity)`
  min-width: 200px;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: ${COLORS.black};
`;

export const StyledText = styled(Text)`
  color: ${COLORS.white};
`;
