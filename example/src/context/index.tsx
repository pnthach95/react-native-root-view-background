import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer, { initState } from './reducer';
import type { ActionTypes, AppStateProps } from '../typings';

type ContextProps = {
  state: AppStateProps;
  dispatch: React.Dispatch<ActionTypes>;
};

export const Context = React.createContext({} as ContextProps);

export const Provider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
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

Provider.propTypes = {
  children: PropTypes.any,
};
