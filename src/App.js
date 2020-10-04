import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
      
    </div>
  );
}

export default App;
