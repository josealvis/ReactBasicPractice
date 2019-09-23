import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm">
                        <h2>hello</h2>
                    </div>
                </div>
            </div>
        );
    }
}
//component has to be in uppercase
render(<App />, window.document.getElementById('app'));