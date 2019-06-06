import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Home from './component/home/Home';
import * as serviceWorker from './serviceWorker';
import {fetchAddress} from './actions/address-actions';

const store = configureStore();
store.dispatch(fetchAddress());

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
