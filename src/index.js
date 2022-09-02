import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer} from './redux/RootReducer';
import { Provider } from 'react-redux/es/exports';

const store = configureStore({ 
    reducer:  rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})
// rootReducer
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // only for github-pages
    <HashRouter>
         <Provider store={store}>
          <App />
         </Provider>
    </HashRouter>
);
