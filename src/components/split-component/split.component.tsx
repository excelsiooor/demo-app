import React from "react";
import Swiper from "react-native-swiper";
import { useAppSelector } from "@global/lib/hooks";

import { ButtonPageComponent } from '../button-page-component';
import * as Styled from './split.styled';

const firstContent = require('../../../assets/first_content.jpg');
const secondContent = require('../../../assets/second_content.jpg');

export const SplitComponent: React.FC = () => {
  const { firstScreen, secondScreen } = useAppSelector(state => state.pagesReducer)

  return (
    <Styled.Conatainer>
      <Styled.HalfBox withBorder>
        {firstScreen === 1 ? (
            <Styled.ImageWrapper>
              <Styled.StyledImage source={firstContent} />
            </Styled.ImageWrapper>
          ) : (
            <Styled.ImageWrapper>
              <Styled.StyledImage source={secondContent} />
            </Styled.ImageWrapper>
          )}
        <ButtonPageComponent />
      </Styled.HalfBox>
      <Styled.HalfBox>
      <Swiper showsPagination={false}>
        <Styled.ImageWrapper>
          {secondScreen === 1 ? (
            <Styled.StyledImage source={firstContent} />
          ) : (
            <Styled.StyledImage source={secondContent} />
          )}
        </Styled.ImageWrapper>
        <Styled.ImageWrapper>
          {secondScreen === 2 ? (
            <Styled.StyledImage source={firstContent} />
          ) : (
            <Styled.StyledImage source={secondContent} />
          )}
        </Styled.ImageWrapper>
      </Swiper>
      </Styled.HalfBox>
    </Styled.Conatainer>
  )
}
