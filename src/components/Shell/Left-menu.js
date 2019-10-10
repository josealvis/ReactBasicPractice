import React from 'react';
import { Link } from "react-router-dom";


export class LeltMenu extends React.Component {

    render() {
        return (
            <div className="col-md-2" style={{ backgroundColor: 'red' }}>
                <div  >
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="users">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>);
    }
}