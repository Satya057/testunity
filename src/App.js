import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NetworkPanel from './components/NetworkPanel';
import './App.css';  // Add this line to import the styles

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <NetworkPanel />
      </div>
    </Provider>
  );
};

export default App;
