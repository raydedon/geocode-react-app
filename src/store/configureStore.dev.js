import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {initialStateValue} from '../util';

export default function configureStore(initialState = initialStateValue) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancer = composeEnhancers(applyMiddleware(thunk));

	return createStore(rootReducer, initialState, enhancer);
}
