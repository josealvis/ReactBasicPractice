class actionCreator {

    createAction(fn){
        return dispatch =>{
            return fn;
        }
    }

}

exports.actionCreator = actionCreator;