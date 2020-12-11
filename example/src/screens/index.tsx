import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Context } from '../context';
import type { ScreenProps } from '../typings';

const Screen: React.FC<ScreenProps> = ({ navigation }) => {
  const { dispatch, state } = useContext(Context);
  const { colors } = useTheme();
  const primary = { backgroundColor: colors.primary };
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
          <TouchableOpacity onPress={goBack} style={[primary, styles.button]}>
            <Text style={styles.whiteText}>Go back</Text>
          </TouchableOpacity>
          <View style={styles.space} />
        </>
      )}
      <TouchableOpacity onPress={onSwitch} style={[primary, styles.button]}>
        <Text style={styles.whiteText}>Switch theme</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity onPress={goNext} style={[primary, styles.button]}>
        <Text style={styles.whiteText}>Next screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  space: {
    height: 20,
  },
  whiteText: {
    color: 'white',
  },
});

export default Screen;
