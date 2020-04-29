import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
// import Signup from './pages/Signup';
import Signup from './components/Form/Signup';
import Login from './pages/Login';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Switch>
  );
};

export default App;
