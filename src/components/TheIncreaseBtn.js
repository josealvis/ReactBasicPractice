import React  from 'react';

export class TheIncreaseBtn extends React.Component{
    
    constructor(){
        super();
        this.state = {theIncreaseNum: 1};
    }

    increase(){
    this.setState({theIncreaseNum: this.state.theIncreaseNum +1});
    }

    render(){
        return(<button type="button" onClick={() => this.increase()} className="btn btn-dark">{this.props.label +' '+ this.state.theIncreaseNum}</button>);
    }
} 

