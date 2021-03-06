import React, { Component } from 'react';
import links from './model/links'
import Header from './components/header/header'
import ToDoList from './components/ToDoList/ToDoList'
import { Route } from 'react-router';
import styles from './App.css';
import About from './components/pages/about/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header items={links} />
          <div id="main" className={styles.main}>
              <Route path="/to-do-list" component={ToDoList}/>
              <Route path="/about" component={About}></Route>
          </div>
      </div>
    );
  }
}

export default App;
