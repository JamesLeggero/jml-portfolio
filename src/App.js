import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <header>
      <Navigation />
      </header>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        {/* <Route exact path='/resume' component={Resume} /> */}
      </Switch>
      
    </div>
  );
}

export default App;
