import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';

import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import { CartContextProvider } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
