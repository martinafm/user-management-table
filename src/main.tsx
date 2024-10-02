import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const documentRoot = document.getElementById('root') as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(documentRoot);
root.render(<App />);
