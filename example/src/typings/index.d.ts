import type { StackScreenProps } from '@react-navigation/stack';

type AppStateProps = {
  isDark: boolean;
};

type ActionTypes = { type: 'SWITCH_THEME' };

type RootStackParamList = {
  screen: undefined;
};

type ScreenProps = StackScreenProps<RootStackParamList, 'screen'>;

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      card: string;
    }
  }
}
