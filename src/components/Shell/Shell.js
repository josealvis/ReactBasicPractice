import React from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";
import { TopPanel } from './TopPanel';
import { LeltMenu } from "./Left-menu"

import { Home } from  "../Home";

export class Shell extends React.Component {
    render() {
        return (<div className="ja-shell-container">
            <LeltMenu />
            <div className="ja-center-container">
            <TopPanel/>
                <div className="container-fluid">    
                        <Route path={this.props.match.path + "/a"} ><h1>1</h1></Route>
                        <Route path={this.props.match.path + "/s"} ><h1>2</h1></Route>
                        <Route path={this.props.match.path + "/user"}  render={props => ( <Home {...props}  user={{ name: 'pedro' }}/>)} />

                </div>
            </div>

        </div>);
    }
}
