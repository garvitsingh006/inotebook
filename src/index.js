import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoteContextProvider from './contexts/notes/NoteContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteContextProvider>
      <App />
    </NoteContextProvider>
  </React.StrictMode>
);