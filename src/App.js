import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './screens/About/About';
import Home from './screens/Home/Home';
import Portfolio from './screens/Portfolio/Portfolio';
import ProjectDetails from './screens/ProjectDetails/ProjectDetails';
import Contact from './screens/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const [listProjects, setListProjects] = useState("")
  const [fetchProjects, setFetchProjects] = useState(false);
  
  useEffect(() => {
    const listProjects = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/projects`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records)
      setListProjects(response.data.records);
    };
    listProjects();
  }, [fetchProjects]);

  return (
    <div className="app">
      <div>
        <NavBar />
      </div>
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/portfolio'>
            <Portfolio listProjects={listProjects}/>
          </Route>
          <Route path="/portfolio/:name">
            <ProjectDetails listProjects={listProjects}/>
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path="/about" component={About} />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
