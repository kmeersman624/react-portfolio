import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
