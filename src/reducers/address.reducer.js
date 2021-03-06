import {
	FETCH_ADDRESS_FAILURE,
	FETCH_ADDRESS_REQUEST,
	FETCH_ADDRESS_SUCCESS,
	ADD_ADDRESS_SUCCESS,
	DELETE_ADDRESS_SUCCESS
} from '../actions/action-types';
import {initialStateValue} from '../util';

export function address(state = initialStateValue.address, action) {
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
		case ADD_ADDRESS_SUCCESS: {
			const {address = {}} = payload;
			const {address: addressInState} = state;
			return {
				...state,
				address: [...addressInState, address]
			};
		}
		case DELETE_ADDRESS_SUCCESS: {
			const {id = ''} = payload;
			const {address: addressInState} = state;
			return {
				...state,
				address: addressInState.filter(i => i.id !== id)
			};
		}
		default:
			return state;
	}
}
