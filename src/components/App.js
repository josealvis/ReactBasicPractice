//React
import React from "react";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { history } from "../helpers/history";

//app Components
import { Shell } from "./Shell/Shell";
import { LoginPage } from "./loginPage/LoginPage";
import { PrivateRoute } from "./Shell/PrivateRouter";

export class App extends React.Component {
    render() {
        return (
            <Router history={history} >
                <Switch>
                    <PrivateRoute path="/home" component={Shell} />
                    <Route path="/login" render={(props) => <LoginPage {...props} />} />
                    <Redirect from="*" to="/home" />
                </Switch>
            </Router>
        );
    }
}
