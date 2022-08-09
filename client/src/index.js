import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import './index.css';
import App from './App';

export const SocketIOContext = React.createContext()

ReactDOM.render(
  <React.StrictMode>
    <SocketIOContext.Provider value={io('http://localhost:3002')}>
      <App />
    </SocketIOContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

