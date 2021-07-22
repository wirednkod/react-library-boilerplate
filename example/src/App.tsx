import React from 'react';
import { ExampleComponent } from 'flare-react-library';
import './App.css';

function App() {
  return (
    <div className="App">
     <ExampleComponent text="Nikos" />
     <div style={{ width: '400px'}}>
      <LoginSqueezer isMetaMask onClick={() => console.log('hello')}>Meta Mask</LoginSqueezer>
      <LoginSqueezer onClick={() => console.log('hello')}>WalletConnect</LoginSqueezer>
      </div>
    </div>
  );
}

export default App;