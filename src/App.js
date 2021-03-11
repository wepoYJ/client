// import logo from './logo.svg';
import './App.css';
import toas from './component/toas';
// import ShowTips from './component/showTips/showTips'
// import { useState, useEffect, Component } from 'react';
// import Router from './router';
import FirstPages from './pages/FirstPages/FirstPages'

setTimeout(() => {
  toas.loading()
}, 3);

function App(props) {
  console.log('reflsh')


  return (
    <div className="App">
      <toas></toas>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

    
      </header> */}
      <FirstPages></FirstPages>

    </div>
  );
}


export default App;
