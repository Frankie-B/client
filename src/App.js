import React from 'react';
import Home from './pages/Home';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { Route, Switch } from 'react-router-dom';
import Signup from './components/Join/Join';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
      {/* // add signup // add login */}
    </Switch>
  );
};

export default App;
