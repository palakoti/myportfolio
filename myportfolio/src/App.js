import React, { Component } from 'react';
import AppHeader from './AppHeader.js';
import './App.css';
import Home from './Home.js';
import Introduction from './Introduction.js';
import Skills from './Skills.js';
import Card from '@material-ui/core/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <Introduction></Introduction>
        <Skills></Skills>
      </div>
    );
  }
}

export default App;
