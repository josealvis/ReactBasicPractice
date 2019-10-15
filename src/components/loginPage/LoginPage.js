import React from 'react';

export class LoginPage extends React.Component {
    render() {
        return (<div className='ja-login-box'>
            <div className="ja-card">
                <h2>Log in</h2>
                <p>this a text</p>
                <div class="ja-content">
                    <input className="form-control"
                        type="text"
                        placeholder="UserName"
                    />
                    <input className="form-control"
                        type="password"
                        placeholder="password"
                    />
                    <button type="button" className="btn btn-warning" >LOG IN </button>
                    <p>OR</p>
                    <button type="button" className="btn btn-danger" >GOOGLE </button>
                    <button type="button" className="btn btn-success" >FACEBOOK </button>

                </div>

            </div>
        </div>);
    }
}