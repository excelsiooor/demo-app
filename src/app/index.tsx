import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { NavRouter } from '@global/navigation';
import { setupStore } from '@global/lib/store';

import * as theme from '@global/theme';

const store = setupStore();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavRouter />
      </Provider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
