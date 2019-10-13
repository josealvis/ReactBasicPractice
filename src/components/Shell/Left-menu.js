import React from 'react';
import { NavLink } from "react-router-dom";


export class LeltMenu extends React.Component {

    render() {
        return (
            <div className="ja-left-nav">
                <div className='ja-app-name'>
                <span> APPNAME</span>
                </div>
                <div  >
                    <ul className="nav flex-column">
                        <li className="nav-item">
                        <NavLink to={'/'} activeClassName={'link-active'}>Active</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="users/20">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>);
    }
}