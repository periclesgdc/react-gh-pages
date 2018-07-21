import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message.js';
import Input from './Input.js';
import Count from './Count.js';
import Timer from './Timer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {React.createElement(
          'p',
          { className: 'App-intro' },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'To get started, edit ',
          React.createElement('code', null, 'src/App.js'),
          ' and save to reload.',
          React.createElement('br'),
          React.createElement(
            'button',
            { className: 'btn-confirm', onClick: () => alert('Clicado')},
            'Clique em mim'
          )
        )}
        <Message content="Frutas" />
        <Message content="Harry Poter" />
        <Message content="Carolayne" />

        <Input />
        <Count />
        <Timer />
      </div>
    );
  }
}

export default App;
