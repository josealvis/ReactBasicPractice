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
                        <NavLink to={'/about'} className="nav-link" ><i className="ja-icon fas fa-tachometer-alt"></i>Link 1</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={'/users/20'} className="nav-link" ><i className="ja-icon fas fa-tachometer-alt"></i> link 2</NavLink>
                        </li>
                    </ul>
                </div>
            </div>);
    }
}