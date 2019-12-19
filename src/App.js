import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
  <div>
    <Navigation />
  </div>
  <Route exact path="/">
          <Home />
  </Route>
  <Route exact path="/about">
          <About />
  </Route>
  <Route exact path="/contact">
          <Contact />
  </Route>
  </div>
  
);

export default App;
