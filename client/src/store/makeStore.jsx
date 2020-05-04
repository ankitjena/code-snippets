import React from 'react';

export default function makeStore(userReducer, initialState, key) {
  const storeContext = React.createContext();
  const dispatchContext = React.createContext();

  try {
    // eslint-disable-next-line no-param-reassign
    initialState = JSON.parse(localStorage.getItem(key)) || initialState;
  // eslint-disable-next-line no-empty
  } catch {}

  const reducer = (state, action) => {
    const newState = userReducer(state, action);
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  };

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  function useStore() {
    return React.useContext(storeContext);
  }

  function useDispatch() {
    return React.useContext(dispatchContext);
  }

  return [StoreProvider, useDispatch, useStore];
}
