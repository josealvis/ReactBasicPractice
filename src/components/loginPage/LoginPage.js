import React from 'react';

export class LoginPage extends React.Component {
    render() {
        return (<div className='ja-login-box ja-login-card'>
            <div className="ja-card" style={{width:'450px'}}>
                <h2>Log in</h2>
                <p>this a text</p>
                <div className="ja-content">
                    <input className="form-control"
                        type="text"
                        placeholder="UserName"
                    />
                    <input className="form-control"
                        type="password"
                        placeholder="password"
                    />
                    <button type="button" className="btn btn-warning" >LOG IN </button>
                </div>

            </div>
        </div>);
    }
}