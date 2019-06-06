import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// Middleware you want to use in production:
const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState = {}) {
	return createStore(rootReducer, initialState, enhancer);
}
