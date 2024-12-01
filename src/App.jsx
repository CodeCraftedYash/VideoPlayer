import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Header/Nav/Navbar';
import Downloads from './components/pages/Downloads';
import Account from './components/pages/Account';
import Home from './components/pages/Home';
import { ThemeContextProvider, useTheme } from './components/Contexts/ThemeContext';
import Video from './components/Body/Video';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-slate-800'} w-full min-h-screen`}>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
