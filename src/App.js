import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Container } from './components/Container';
import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Container />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </Fragment>
  );
}
export default App;
