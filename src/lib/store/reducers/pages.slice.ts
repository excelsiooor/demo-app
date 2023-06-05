import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  firstScreen: 1,
  secondScreen: 1,
}

export const setupPagesSlice = createSlice({
  name: 'setupPagesSlice',
  initialState,
  reducers: {
    setFirstScreenPage: (state, action: PayloadAction<number>) => {
      state.firstScreen = action.payload;
    },
    setSecondScreenPage: (state, action: PayloadAction<number>) => {
      state.secondScreen = action.payload;
    },
    switchContent: (state) => {
      state.firstScreen = state.firstScreen === 1 ? 2 : 1;
      state.secondScreen = state.firstScreen === 1 ? 2 : 1;
      return state;
    },
  }
})

export const pagesReducer = setupPagesSlice.reducer
export const pagesActions = setupPagesSlice.actions
