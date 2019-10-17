//css
import './index.scss';
//React
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

//app component
import { App } from './components/App';
//redux store
import { store } from './helpers/store';


//component has to be in uppercase
render(<Provider store={store} ><App/></Provider>,window.document.getElementById('app'));