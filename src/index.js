import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import '@styles/index.css';
import App from '@containers/App';

ReactDOM.render(
  <React.StrictMode>
			<BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
