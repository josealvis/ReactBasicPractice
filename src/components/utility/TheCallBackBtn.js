import React from 'react';

export class TheCallBackBtn extends React.Component{
  
    constructor(props){
        super();
        this.state = { arg1 : 'ok'}
    }
    onClickBtn(){
        this.props.callback(this.state.arg1);
    }
    render(){
        return (<button type="button" className="btn btn-warning" onClick={()=> this.onClickBtn()}>The CallBack Button </button>);
    }
}
//