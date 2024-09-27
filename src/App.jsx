import Users from './Users';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';

function App() {
  return (
    <div className="mx-4 flex max-w-screen-xl flex-col items-center justify-center xl:mx-auto">
      <Header />
      <Provider store={store}>
        <Users />
      </Provider>
    </div>
  );
}

export default App;
