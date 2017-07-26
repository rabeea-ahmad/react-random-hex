import React, { Component } from 'react';
import Card from './components/Card.js'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p className="title"> let&rsquo;s talk about hex baby </p>
        <Card/>
      </div>
    );
  }
}

export default App;
