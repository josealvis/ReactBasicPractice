import { createStore, combineReducers, applyMiddleware,} from 'redux';
import { createLogger } from 'redux-logger';
import { authentication } from '../reducers/authentication.reducer'

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

export const store = createStore(
    combineReducers({ reducer, userReducer,authentication}),{},
    applyMiddleware(createLogger())
);
