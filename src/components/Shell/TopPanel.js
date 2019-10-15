import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.action';
import { Route, Redirect } from 'react-router-dom';
import { history } from '../../helpers/history';


class TopPanel extends React.Component {

    constructor(props) {
        super(props)
        this.logOutHandler = this.logOutHandler.bind(this);
    }

    logOutHandler(e) {
        this.props.logout();
    }

    render() {
        return (<div className='ja-top-panel'>

           { this.props.loggingIn.loggedIn &&<h4>{this.props.loggingIn.user}</h4>}
           { this.props.loggingIn.loggedIn &&<a onClick={this.logOutHandler}>log out</a>}
        </div>);
    }
}


//mapea  las propiedades del component con los reducers
function mapStateToProps(state) {
    return { loggingIn: state.authentication };// autentication reducer
}

const mapDispachToProp = (dispatch) => {
    return {
        logout: userActions.logout(dispatch)
    }
}

const connectedLoginPage = connect(mapStateToProps, mapDispachToProp)(TopPanel);
export { connectedLoginPage as TopPanel };