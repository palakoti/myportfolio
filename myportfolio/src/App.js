import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import './App.css';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
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
