import styled, { css } from 'styled-components/native';
import { COLORS } from '@global/theme';
import { View, TouchableOpacity } from 'react-native';

export const Conatiner = styled(View)`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

interface IProps {
  isActive: boolean;
}

export const PageButton = styled(TouchableOpacity)<IProps>`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${COLORS.lightGray};
  display: flex;
  justify-content: center;
  ${({ isActive }) => isActive && css`background: ${COLORS.iconBlue}`}
`;
