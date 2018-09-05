import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store';
//import DevTools from './DevTools';
import { getCountries } from '../src/actions/actions-countries';
import routes from './routes';
import './country.css'

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());