import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Card from '@material-ui/core/Card';

class App extends Component {
  render() {
    return (
      <div id="App">
    <Introduction></Introduction>
          <Skills></Skills>
          <WorkHistory></WorkHistory>
          <Education></Education>
          <Achievements></Achievements>
          	</div>
    );
  }
}

export default App;
