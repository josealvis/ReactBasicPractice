import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.action';

import { history } from '../../helpers/history';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        history.push('/user/333');
        this.setState({ submitted: true });
        const { username, password } = this.state;

        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="ja-center-container">
                <div className='ja-login-box ja-login-card'>
                    <div className="ja-card" style={{ width: '450px' }}>
                        <h2>Log in</h2>
                        <p>this a text</p>
                        <div className="ja-content">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <input className="form-control"
                                    type="text"
                                    value={username} name="username" onChange={this.handleChange}
                                    placeholder="UserName"
                                />
                                <input className="form-control"
                                    type="password"
                                    value={password}
                                    name="password"
                                    onChange={this.handleChange}
                                    placeholder="password"
                                />
                                <button className="btn btn-warning" >LOG IN </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

//mapea  las propiedades del component con los reducers
function mapStateToProps(state) {
    return { loggingIn: state.authentication };// autentication reducer
}

/*const mapDispachToProp = (dispatch)=>{
return{
    login: userActions.login(dispatch)
}
}*/

const mapDispachToProp = {
    login: userActions.login,
};

const connectedLoginPage = connect(mapStateToProps, mapDispachToProp)(LoginPage);
export { connectedLoginPage as LoginPage };