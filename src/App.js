import './App.css';
import NavBar from './components/navBar'
import Counters from './components/counters';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <main> contains the content of <body> */}
      <main className="container"> 
      <Counters /> 
      </main>
    </React.Fragment>
  );
}

export default App;
