import React from 'react';

export class TheUselessInput extends React.Component{
    constructor(props){
        super();
        this.state = {text:''};
    }

    onChageText(ev){
        this.setState({text: ev.target.value })
        this.props.callback(ev.target.value);
    }

    render(){
        return(<div>
            <input className="form-control" 
                   type="text" 
                   placeholder="The Useless input"
                   value={this.state.text}
                   onChange={(ev)=> this.onChageText(ev)}
                   />
            <p>{this.state.text}</p>
        </div>);
    }
} 