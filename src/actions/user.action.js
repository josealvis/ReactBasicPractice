import { userConstants } from '../appCofig/constants/user.constants';
import {history} from '../helpers/history';

export const userActions = {
    login,
    logout
};


function login(username, password) {
    return dispatch => {
      
        if (password === 'admin') {
            setTimeout(()=>{
                localStorage.setItem('user', username);
                dispatch(success(username));
                history.push('/home/user');
            },2000);
        } else alert('Wrong pass!!!');
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}



function logout(){
    return dispatch =>{
        localStorage.clear(); 
        dispatch({ type: userConstants.LOGOUT});
        history.push('/login');
    }
}

