import styled, { css } from 'styled-components/native';
import { View, Image } from 'react-native';
import { COLORS } from '../../theme/colors.const';

export const Conatainer = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

interface IHalfBoxProps {
  withBorder?: boolean;
}

export const HalfBox = styled(View)<IHalfBoxProps>`
  width: 50%;
  height: 100%;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  ${({ withBorder }) => withBorder && css`
    border-right-width: 1px;
    border-right-color: ${COLORS.lightGray};
  `};
`;

export const ImageWrapper = styled(View)`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 50%;
`;
