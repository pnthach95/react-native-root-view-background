import { useContext, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { setRootViewBackgroundColor } from '../../../src';
import { Provider, Context } from '../context';
import Screen from '../screens';
import type { RootStackParamList } from '../typings';

const styles = StyleSheet.create({
  full: { flex: 1 },
});

const Stack = createStackNavigator<RootStackParamList>();

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
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={state.isDark ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator>
        <Stack.Screen name="screen" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Route = () => {
  return (
    <GestureHandlerRootView style={styles.full}>
      <Provider>
        <Container />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default Route;
