import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';


class App extends React.Component {
    render() {
        let user ={ name: 'jose'}
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm">
                        <Header>
                        <p>This is a text</p>    
                        </Header>
                        <Home user={user} />
                    </div>
                </div>
            </div>
        );
    }
}
//component has to be in uppercase
render(<App />, window.document.getElementById('app')); 