import makeStore from './makeStore';

const initialState = {
  username: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        username: action.username,
      };
    default:
      return state;
  }
};

const [
  UserProvider,
  useUserDispatch,
  useUserStore,
] = makeStore(reducer, initialState, 'username');

export { UserProvider, useUserStore, useUserDispatch };
