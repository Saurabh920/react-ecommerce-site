import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Banner/Banner.css'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Store} from './Store/Store'


ReactDOM.render(
    <Provider store={Store}>
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
    </Provider>, document.getElementById('root')
);