import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>header {2+3}</h1>
                {this.props.children}
            </div>
        );
    }
}

//props.chindren is the inner 