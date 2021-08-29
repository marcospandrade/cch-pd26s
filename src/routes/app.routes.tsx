import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { FormularioCadastro } from '../screens/FormularioCadastro';
import { Dashboard } from '../screens/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={
        {
          cardStyle: {
            backgroundColor: theme.colors.primary
          }
        }
      }
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="FormularioCadastro"
        component={FormularioCadastro}
      />
      <Screen
        name="Dashboard"
        component={Dashboard}
      />
    </Navigator>
  );
}
