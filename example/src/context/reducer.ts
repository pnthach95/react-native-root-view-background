import type { ActionTypes, AppStateProps } from '../typings';

const Reducer: React.Reducer<AppStateProps, ActionTypes> = (
  prevState,
  payload,
) => {
  switch (payload.type) {
    case 'SWITCH_THEME':
      return {
        ...prevState,
        isDark: !prevState.isDark,
      };
    default:
      return prevState;
  }
};

export const initState: AppStateProps = { isDark: false };

export default Reducer;
