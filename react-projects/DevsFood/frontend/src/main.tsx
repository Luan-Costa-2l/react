import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { Provider } from 'react-redux';
import { store } from './redux/store';

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
