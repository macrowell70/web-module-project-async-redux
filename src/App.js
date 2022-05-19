import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import * as actions from './state/action-creators';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Bored? Find an Activity!</h1>
      <button onClick={() => props.fetchActivity()}>Get Activity</button>
    </div>
  );
}

export default connect(st => st, actions)(App);