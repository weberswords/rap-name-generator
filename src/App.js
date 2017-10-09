import React, { Component } from 'react';
import './App.css';
import NameForm from './components/Input';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        
      	<Header />
        <NameForm />
      </div>
    );
  }
}

export default App;
