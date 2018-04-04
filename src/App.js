import React, { Component } from 'react';
import links from './model/links'
import Header from './components/header/header'
import ToDoList from './components/ToDoList/ToDoList'
import { Route } from 'react-router';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header items={links} />
          <div id="main" className={styles.main}>
              <Route path="/to-do-list" component={ToDoList}/>
          </div>
      </div>
    );
  }
}

export default App;
