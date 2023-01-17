import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { AppProvider } from './context/appContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*we wrap the APP with the AppProvider so the APP is re-rendered
     whenever any value in the context changes */}
    <AppProvider>
    <App />
    </AppProvider>
  
  </React.StrictMode>
);
