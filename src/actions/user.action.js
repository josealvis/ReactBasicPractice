import { userConstants } from '../appCofig/constants/user.constants';
/*import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
*/
export const userActions = {
    login2,
};


function login2(dispatch){
    return (username, password) =>{
        dispatch(success(username));
    }
    

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

}

function login(username, password) {
    return dispatch => {
        dispatch({ type: userConstants.LOGIN_SUCCESS, user:username } );
      /*  userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );*/
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}