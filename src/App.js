import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about'
import Services from './pages/services'
import Home from './pages/home'

// .::ROUTES::.

import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'



const App = () => (

  <Router>
       <Switch>
          <Route exact path="/BuenCarro">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
       </Switch>
  </Router>
)

export default App;
