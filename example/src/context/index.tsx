import { createContext, useMemo, useReducer } from 'react';
import reducer, { initState } from './reducer';
import type { ActionTypes, AppStateProps } from '../typings';

type ContextProps = {
  state: AppStateProps;
  dispatch: React.Dispatch<ActionTypes>;
};

export const Context = createContext({} as ContextProps);

export const Provider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const userReducer = useMemo<ContextProps>(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return <Context.Provider value={userReducer}>{children}</Context.Provider>;
};
