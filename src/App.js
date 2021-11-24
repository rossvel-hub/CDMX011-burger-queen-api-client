import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Container } from './components/Container';
import { Cocina } from './components/Cocina';
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
            <Route path="/Cocina">
              <Cocina />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </Fragment>
  );
}
export default App;
