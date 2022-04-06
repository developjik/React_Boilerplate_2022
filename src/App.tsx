import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Navigation from 'components/Navigation';
import Home from 'pages/Home';
import More from 'pages/More';
import Contact from 'pages/Contact';
import About from 'pages/About';
import Footer from 'components/Footer';
import Login from 'pages/Login';
import Register from 'pages/Register';

const GlobalStyles = createGlobalStyle` 
    ${reset};
    *{
      box-sizing:border-box;
    };
`;

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
