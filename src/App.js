import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AboutMe from './screens/AboutMe/AboutMe';
import Home from './screens/Home/Home';
import Portfolio from './screens/Portfolio/Portfolio';
import ProjectDetails from './screens/ProjectDetails/ProjectDetails';
import Contact from './screens/Contact/Contact';

function App() {
  

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
