import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
// import GlobalStyle from './GlobalStyle';
import IndexRouter from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <IndexRouter />
      {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      <SwaggerUI url="http://localhost:3000" /> */}
    </BrowserRouter>
  );
}
export default App;
