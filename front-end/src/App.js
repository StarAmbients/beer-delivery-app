import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import IndexRouter from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <IndexRouter />
    </BrowserRouter>
  );
}
export default App;
