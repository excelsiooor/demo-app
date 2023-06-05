import React from 'react';
import { Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '@global/lib/hooks';
import { pagesActions } from '@global/lib/store';

import * as Styled from './button-page.styled';

export const ButtonPageComponent: React.FC = () => {
  const { firstScreen } = useAppSelector(state => state.pagesReducer)
  const { setFirstScreenPage } = pagesActions
  const dispatch = useAppDispatch()

  const setPage = (page: number) => {
    dispatch(setFirstScreenPage(page))
  }

  return (
    <Styled.Conatiner>
      <Styled.PageButton isActive={firstScreen === 1} onPress={() => setPage(1)}>
        <Text style={{textAlign: 'center'}}>1</Text>
      </Styled.PageButton>
      <Styled.PageButton isActive={firstScreen === 2} onPress={() => setPage(2)}>
        <Text  style={{textAlign: 'center'}}>2</Text>
      </Styled.PageButton>
    </Styled.Conatiner>
  )
}
