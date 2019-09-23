import React from 'react';

export class Home extends React.Component {
    render() {
        let list = ['thought', 'word', 'cat'];
        return (
            <div>
            <h1>home {this.props.user.name}</h1>
        <ul>
            {list.map((el, i) => <li key={i}>{el}</li>) }
        </ul>
        </div>
        );
    }
}
