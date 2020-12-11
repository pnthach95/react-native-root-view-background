import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

import { Context } from '../context';
import type { ScreenProps } from '../typings';

const Screen: React.FC<ScreenProps> = ({ navigation }) => {
  const { dispatch, state } = useContext(Context);
  const { colors } = useTheme();
  const canGoBack = navigation.canGoBack();
  const goBack = () => navigation.goBack();
  const goNext = () => navigation.push('screen');
  const onSwitch = () => dispatch({ type: 'SWITCH_THEME' });

  return (
    <View style={styles.center}>
      <StatusBar
        backgroundColor={colors.card}
        barStyle={state.isDark ? 'light-content' : 'dark-content'}
      />
      {canGoBack && (
        <>
          <Button mode="contained" onPress={goBack}>
            Go back
          </Button>
          <View style={styles.space} />
        </>
      )}
      <Button mode="contained" onPress={onSwitch}>
        Switch theme
      </Button>
      <View style={styles.space} />
      <Button mode="contained" onPress={goNext}>
        Next screen
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  space: {
    height: 20,
  },
});

export default Screen;
