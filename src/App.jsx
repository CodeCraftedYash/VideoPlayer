import React from 'react';
import './index.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Header/Nav/Navbar';
import Downloads from './components/pages/Downloads';
import Account from './components/pages/Account';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
    <div className="bg-slate-800 w-full min-h-screen">
      <Header />
      <Navbar />

      <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Downloads" element={<Downloads />}/>
              <Route path="/Account" element={<Account />}/>
           </Routes>

     
    </div>
    </Router>
  );
}

export default App;
