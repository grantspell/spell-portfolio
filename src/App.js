import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';

// Components
import Home from './components/home/Home'
import Experience from './components/experience/Experience'
import Narrative from './components/narrative/Narrative'
import Connect from './components/connect/Connect'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
              <Home exact path="/" component={Home} />
              <Experience exact path="/experience" component={Experience}/>
              <Narrative exact path="/narrative" component={Narrative} />
              <Connect exact path="/connect" component={Connect} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
