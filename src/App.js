import React, { Component } from 'react';

import './App.css';
import Sidebar from './Sidebar'
import Notelist from './Notelist'
import NoteForm from './NoteForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Notelist />
        <NoteForm />
      </div>
    );
  }
}

export default App;