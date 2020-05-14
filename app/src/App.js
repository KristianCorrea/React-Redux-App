import React from 'react';
import './App.css';
import Insult from './components/Insult'
function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="App" style={{backgroundColor: '#87a3fa', width: '50%'}}>
      <h1>Insult Generator</h1>
      <Insult />
      </div>
    </div>
    
  );
}

export default App;
