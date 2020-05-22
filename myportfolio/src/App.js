import React, { Component } from 'react';
import './App.css';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Achievements from './components/Achievements';

class App extends Component {
  render() {
    return (
      <div id="App">
      <Introduction></Introduction>
        <div className="container-wrap" id="container">
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
