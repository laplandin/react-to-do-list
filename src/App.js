import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import links from './model/links'
import Header from './components/header/header'
import ToDoList from './components/ToDoList/ToDoList'
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header items={links} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div id="main">
              <Route path="/to-do-list" component={ToDoList}/>
          </div>
      </div>
    );
  }
}

export default App;
