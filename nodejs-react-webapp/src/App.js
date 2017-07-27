import React, { Component } from 'react';
import AddTweet from './components/AddTweet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Beardy Tutorials</h2>
        </div>
        <AddTweet />
      </div>
    );
  }
}

export default App;
