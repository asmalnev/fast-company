import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Users from './pages/Users';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
