import React from 'react';

import { TheCallBackBtn } from './utility/TheCallBackBtn'

export class Home extends React.Component {

    constructor(){
        super();
        this.state = { text1: 'change this text'};
    }

    msgBox(arg1){
        alert('ok this is from parent'+arg1);
        
        this.setState({text1 : arg1});
    }

    render() {
        let list = ['thought', 'word', 'cat'];
        return (
            <div>
                <h2>{this.state.text1}</h2>
            <h1>home {this.props.user.name}</h1>
        <ul>
            {list.map((el, i) => <li key={i}>{el}</li>) }
        </ul>
        <TheCallBackBtn  callback={(arg)=> this.msgBox(arg)}/>
        </div>
        );
    }
}
