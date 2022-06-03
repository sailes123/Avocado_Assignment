import './App.css';
import React from 'react';
import Create from "./Create";
import Read from './Read';
import Update from './Update';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route exact path='/read' element={<Read/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/' element={<Create/>} />
      </Routes>
      
    </div> 
    </Router>

  );
}

export default App;
