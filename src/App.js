import React from 'react';
import './App.css';
// import Navbar from './components/Navbar'
import Header from './components/Header'
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Header />
        <Home />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;