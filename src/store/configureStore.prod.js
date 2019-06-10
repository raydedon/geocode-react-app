import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {initialStateValue} from '../util';

// Middleware you want to use in production:
const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState = initialStateValue) {
	return createStore(rootReducer, initialState, enhancer);
}
