import {
	FETCH_ADDRESS_FAILURE,
	FETCH_ADDRESS_REQUEST,
	FETCH_ADDRESS_SUCCESS,
} from '../actions/action-types';

export function address(state = {address: []}, action) {
	const {type, payload} = action;
	switch(type) {
		case FETCH_ADDRESS_REQUEST: {
			return {...state, loadingAddress: true};
		}
		case FETCH_ADDRESS_SUCCESS: {
			const {address = []} = payload;
			return {...state, address, loadingAddress: false};
		}
		case FETCH_ADDRESS_FAILURE: {
			return {...state, loadingAddress: false};
		}
		default:
			return state;
	}
}
