import React from 'react';
import AppRouter from './router';
import { UserProvider } from './store/userStore';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
