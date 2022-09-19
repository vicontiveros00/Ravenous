//import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
      <p className="vic">github/vicontiveros00</p>
    </div>
  );
}

export default App;
