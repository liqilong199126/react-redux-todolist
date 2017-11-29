import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index';
import App from './components/App';
// import './stylesheet/main.scss';

//获取store
let store = createStore(todoApp)

store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root')
);