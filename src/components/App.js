
//React
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from '@material-ui/core/Container';

//app Components
import { LeltMenu } from './Shell/Left-menu';
import { Shell } from './Shell/Shell'
import { TopPanel } from './Shell/TopPanel';
import {LoginPage } from './loginPage/LoginPage';
import {PrivateRoute} from './Shell/PrivateRouter'
import { Home } from './Home';
//security
import { securityCore } from '../security/securityCore';


let se = new securityCore();
se.logIn('jose', 'admin');
se.logOut();

export class App extends React.Component {
    render() {
        let user = { name: 'jose' }
        return (

            <Router >
                {localStorage.getItem('user') && <LeltMenu />}
                <div className="ja-center-container">
                    <TopPanel />
                    <div className="container-fluid">
                       
                            <Switch>
                                <Route path="/about">
                                    <Shell />
                                </Route>
                                <PrivateRoute path="/users/:id" component={<Home user={{ name: 'pedro' }} />}/>
                                <Route path="/login" render={(props) => <LoginPage {...props} />} />
                            </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

/** create another rauter insede de homepage to handler de menu  */