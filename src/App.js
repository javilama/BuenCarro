import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about'
import Services from './pages/services'
import Home from './pages/home'

// .::ROUTES::.

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/services"  component={Services}/>
      </Switch>
   </Router>
  );
}

export default App;
