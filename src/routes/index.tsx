import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { AppRoutes } from './app.routes';
import {theme } from '../global/styles/theme';

const themeUI = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: theme.colors.secondary,
  }
}

export function Routes() {

  return (
    <PaperProvider theme={themeUI}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </PaperProvider>
  )
}