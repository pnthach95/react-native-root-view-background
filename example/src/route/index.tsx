import React, { useContext, useEffect } from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setRootViewBackgroundColor } from '../../../src';

import { Provider, Context } from '../context';
import Screen from '../screens';

const Stack = createStackNavigator();

const Container = () => {
  const { state } = useContext(Context);
  const selectTheme = state.isDark ? DarkTheme : DefaultTheme;

  useEffect(() => {
    if (state.isDark) {
      setRootViewBackgroundColor(DarkTheme.colors.background);
    } else {
      setRootViewBackgroundColor(DefaultTheme.colors.background);
    }
  }, [state.isDark]);

  return (
    <NavigationContainer theme={selectTheme}>
      <Stack.Navigator>
        <Stack.Screen name="screen" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Route = () => {
  return (
    <Provider>
      <Container />
    </Provider>
  );
};

export default Route;
