import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import UserManagementTable from './UserManagementTable.tsx';

function App(): React.ReactNode {
  return (
    <Provider store={store}>
      <UserManagementTable />
    </Provider>
  );
}

export default App;