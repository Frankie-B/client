import React from 'react';
import Home from './pages/Home';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
      {/* // add signup // add login */}
    </Router>
  );
};

export default App;
