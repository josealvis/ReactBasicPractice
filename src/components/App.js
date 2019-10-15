
//React
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from '@material-ui/core/Container';

//app Components
import { LeltMenu } from './Shell/Left-menu';
import { Shell } from './Shell/Shell'
import { TopPanel } from './Shell/TopPanel';
import { Header } from './Header';
import { Home } from './Home';
//import { TheIncreaseBtn } from './components/TheIncreaseBtn';
//ok
//security

import { securityCore } from '../security/securityCore';


let se = new securityCore();
se.logIn('jose', 'admin');

export class App extends React.Component {
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

