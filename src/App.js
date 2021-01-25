import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Blog from './components/pages/Blog';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About}/>
          {/* <Route path='/services' component={Services} /> */}
          <Route path='/blog' component={Blog} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
