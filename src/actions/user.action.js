import { userConstants } from '../appCofig/constants/user.constants';
import { actionCreator} from './actionCreator'
import {history} from '../helpers/history';
/*import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
*/
export const userActions = {
    login,
    logout
};


function login(dispatch) {
    return (username, password) => {

        if (password === 'admin') {
            localStorage.setItem('user', username);
            dispatch(success(username));

        } else alert('Wrong pass!!!');
    }


    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(dispatch){
    return () =>{
        localStorage.clear(); 
        dispatch({ type: userConstants.LOGOUT});
        history.push('/login');
    }
}

