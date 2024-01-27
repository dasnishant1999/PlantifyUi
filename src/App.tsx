import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import MainNavigator from './Navigation/MainNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
