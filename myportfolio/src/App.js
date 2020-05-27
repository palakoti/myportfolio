import React, { Component } from 'react';
import './App.css';
import './style.css';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div id="App">
      <Introduction></Introduction>

        <div className="container" id="container" data-section="container">
      
        <Navigation></Navigation>
          <Skills></Skills>
          <WorkHistory></WorkHistory>
          <Education></Education>
          <Achievements></Achievements>
          	</div>
            </div>
    );
  }
}

export default App;
