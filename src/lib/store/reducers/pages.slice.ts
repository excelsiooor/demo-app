import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMainDirection: true
}

export const setupPagesSlice = createSlice({
  name: 'setupPagesSlice',
  initialState,
  reducers: {
    switchContent: (state) => {
      state.isMainDirection = (!state.isMainDirection);
      return state;
    },
  }
})

export const pagesReducer = setupPagesSlice.reducer
export const pagesActions = setupPagesSlice.actions
