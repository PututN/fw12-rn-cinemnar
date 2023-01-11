import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import Main from './src/screens/Main';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
