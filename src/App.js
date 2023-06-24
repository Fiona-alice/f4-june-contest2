import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './App.css';

import Login from './Login';
import Profile from './Profile';

// Create the Redux store
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" component={Login} />
          <Route path="/profile" component={Profile} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
