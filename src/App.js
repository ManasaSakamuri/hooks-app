import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClickCounter from './components/higherorderComponents/ClickCounter';
import HoverCounter from './components/higherorderComponents/HoverCounter';
import DocTitle from './components/customhooks/effects/DocTitle';
import DocTitle2 from './components/customhooks/effects/DocTitle2';
import useDocTitle from './components/customhooks/effects/useDocTitle';
import Counter1 from './components/customhooks/effects/functionality/Counter1';
import Counter2 from './components/customhooks/effects/functionality/Counter2';
import useCounter from './components/customhooks/effects/functionality/useCounter';

function App() {
  return (
      <div className="App">
        <useCounter/>
      </div>
    
  );
}

export default App;