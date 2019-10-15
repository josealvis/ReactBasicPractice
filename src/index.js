//css
import './index.scss';
//React
import React from 'react';
import { render } from 'react-dom';

//redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware,} from 'redux';
import { createLogger } from 'redux-logger';
//app component
import { App } from './components/App';



const userReducer = (state = {
    user: 'jose',
    logged: false
}, action) => {

    switch (action.type) {
        case "USER_REDUCER_UPDATE_LOGIN":
            state = {
                ...state,
                user: action.payload,
            }

            break;
        case "USER_REDUCER_UPDATE_LOGING_STATUS":
            state = {
                ...state, logged: action.payload,
            }
            break;
    }
    return state;
}

const reducer = (state = {
    result: 1,
    lastValues: []
}
    , action) => {

    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }

            break;
        case "SUBTRACT":
            state = {
                ...state, result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
}


const store = createStore(
    combineReducers({ reducer, userReducer }),
    {},
    applyMiddleware(createLogger())
);

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