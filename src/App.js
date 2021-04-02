import logo from './logo.svg';
import './App.css';
import Workout from './Workout.js'
import Navbar from './Navbar'
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Workout />
    </div>
  );
}

export default App;
