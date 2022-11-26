import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/Tourlist';
import './App.scss';

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
