import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookstoreApp from './components/BookstoreApp';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BookstoreApp />
  </React.StrictMode>,
);
