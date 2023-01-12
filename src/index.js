import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1.CẤU HÌNH - "REDUX + SAGA"
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from './redux/reducer';
import rootSaga from './redux/saga';



// 2.CẤU HÌNH - "REDUX + SAGA"
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// 3.CẤU HÌNH - "REDUX + SAGA"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
