import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Navigation from 'components/Navigation';

const GlobalStyles = createGlobalStyle` 
    ${reset};
    *{
      box-sizing:border-box;
    };
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navigation />
    </div>
  );
}

export default App;
