//css
import './index.scss';
//React
import React from 'react';
import { render } from 'react-dom';

//redux
import { Provider } from 'react-redux'
//app component
import { App } from './components/App';
//store

import {store } from './helpers/store';


store.subscribe(() => {
    // console.log("State Updated!!", store.getState());
});

store.dispatch({ type: 'ADD', payload: 10 });
store.dispatch({ type: 'USER_REDUCER_UPDATE_LOGING_STATUS', payload: true });
store.dispatch({ type: 'ADD', payload: 22 });


//component has to be in uppercase
render(
    <Provider store={store} >
        <App />
    </Provider>,
    window.document.getElementById('app'));