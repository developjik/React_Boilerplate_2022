import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { ThemeInterface } from 'common/interface';
import { lightTheme, darkTheme } from 'common/theme';

import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

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
    * {
      box-sizing:border-box;
    };
    body {
        background: ${({ theme }: { theme: ThemeInterface }) => theme.bg};
        color: ${({ theme }: { theme: ThemeInterface }) => theme.text};
    }
`;

const DarkModeToggle = styled.button`
  position: absolute;
  bottom: 5vh;
  right: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5em;
  height: 2.5em;
  border: none;
  border-radius: 50%;
  background: ${({ theme }: { theme: ThemeInterface }) => theme.text};
`;

function App() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
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

          <DarkModeToggle onClick={toggle}>
            {isDarkMode ? (
              <IoSunnyOutline style={{ color: '#000', fontSize: '1.5em' }} />
            ) : (
              <IoMoonOutline style={{ color: '#fff', fontSize: '1.5em' }} />
            )}
          </DarkModeToggle>

          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
