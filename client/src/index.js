import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
// Cau hinh redux-saga lien ket voi mongodb
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './redux/reducers';
import mySaga from './redux/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
// then run the saga
sagaMiddleware.run(mySaga)

// render the application

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


