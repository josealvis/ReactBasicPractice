import { createStore, combineReducers, applyMiddleware,} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { authentication } from '../reducers/authentication.reducer'

export const store = createStore(
    combineReducers({ reducer, userReducer,authentication}),{},
    applyMiddleware(createLogger(), thunkMiddleware)
);
