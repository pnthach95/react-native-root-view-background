import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { setRootViewBackgroundColor } from '@pnthach95/react-native-root-view-background';

import { Provider, Context } from '../context';
import Screen from '../screens';
import { dark, light } from '../theme';

const Stack = createStackNavigator();

const Container = () => {
  const { state } = useContext(Context);
  const selectTheme = state.isDark ? dark : light;

  useEffect(() => {
    if (state.isDark) {
      setRootViewBackgroundColor(dark.colors.background);
    } else {
      setRootViewBackgroundColor(light.colors.background);
    }
  }, [state.isDark]);

  return (
    <PaperProvider theme={selectTheme}>
      <NavigationContainer theme={selectTheme}>
        <Stack.Navigator>
          <Stack.Screen name="screen" component={Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
