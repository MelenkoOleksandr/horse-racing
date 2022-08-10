import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';

export const socket = io('http://localhost:3002')

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
                <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

