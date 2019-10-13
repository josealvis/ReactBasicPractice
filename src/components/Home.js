import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import { TheCallBackBtn } from './utility/TheCallBackBtn'
import { TheUselessInput } from './utility/TheUselessInput'


export class Home extends React.Component {

    constructor(props){
        super();
        this.state = { text1: 'change this text'};
        this.id = 0;
    }

     
    componentWillMount(){
        console.log('ok11111', this.props);
        this.id =this.props.match.params.id;
    }

    msgBox(arg1){
        alert('ok this is from parent'+arg1);
        
        this.chageText(arg1)
    }

    chageText(arg1){
        this.setState({text1 : arg1});  
    }

    render() {
        let list = ['thought', 'word', 'cat'];

        return (
            <div>
                
                <h2>{this.state.text1}</h2>
         <h1>home {1}</h1>
            <h1>id {this.id}</h1>
        <ul>
            {list.map((el, i) => <li key={i}>{el}</li>) }
        </ul>
        <TheCallBackBtn  callback={(arg)=> this.msgBox(arg)}/>
        <TheUselessInput callback={(arg)=> this.chageText(arg)}/>
        </div>
        );
    }
}
