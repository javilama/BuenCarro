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
        <Route path="/" component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/services" exact component={Services}/>
      </Switch>
   </Router>
  );
}

export default App;
