import React from 'react';
import ReactDOMClient from 'react-dom/client';

import './scss/index.scss';
import 'macro-css'

import App from './App';


const element = document.getElementById('root')
const root = ReactDOMClient.createRoot(element);
root.render(<App />);
