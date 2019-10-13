/*//css
import './index.scss';
//React
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from '@material-ui/core/Container';

//app Components
import { LeltMenu } from './components/Shell/Left-menu';
import { Shell } from './components/Shell/Shell'
import { TopPanel } from './components/Shell/TopPanel';
//import { Header } from './components/Header';
import { Home } from './components/Home';
//import { TheIncreaseBtn } from './components/TheIncreaseBtn';
//ok
//security

import { securityCore } from './security/securityCore';
let se = new securityCore();
se.logIn('jose', 'admin');

class App extends React.Component {
    render() {
        let user = { name: 'jose' }
        return (

            <Router >
                <LeltMenu />
                <div className="ja-center-container">
                    <TopPanel />
                    <div className="container-fluid">
                        {se.isLogged() &&
                            <Switch>
                                <Route path="/about">
                                    <Shell />
                                </Route>
                                <Route path="/users/:id" render={(props) => <Home {...props} user={{ name: 'pedro' }} />} />
                                <Route path="/">
                                    <h1>ok2</h1>
                                </Route>
                            </Switch>}
                    </div>
                </div>
            </Router>
        );
    }
}
//component has to be in uppercase
render(<App />, window.document.getElementById('app'));



/*<Header>
                    <p>This is a text</p>
                </Header>
                <Home user={user} />
                <TheIncreaseBtn label={'The Increase Button'} />*/



import { createStore } from 'redux';

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            state = state - action.payload;
            break;
    }
    return state;
}


const store = createStore(reducer,0);

store.subscribe(() => {
    console.log("State Updated!!", store.getState());
});

store.dispatch({type: 'ADD',payload: 10});
store.dispatch({type: 'ADD',payload: 10});