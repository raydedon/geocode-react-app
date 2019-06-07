import {
	ADD_ADDRESS, DELETE_ADDRESS,
	FETCH_ADDRESS_FAILURE,
	FETCH_ADDRESS_REQUEST,
	FETCH_ADDRESS_SUCCESS,
} from './action-types';
import {addressService} from '../services/address.service';

export function fetchAddress() {
	const request = () => ({
		type: FETCH_ADDRESS_REQUEST,
		payload: {addresses: []},
	});
	const success = addresses => ({
		type: FETCH_ADDRESS_SUCCESS,
		payload: {addresses},
	});
	const failure = error => ({type: FETCH_ADDRESS_FAILURE, payload: {error}});

	return (dispatch) => {
		dispatch(request());

		addressService
			.fetchAddress()
			.then(
				addresses => dispatch(success(addresses)),
				error => dispatch(failure(error)),
			);
	};
}

export const addAddress = (address) => ({
	type: ADD_ADDRESS,
	payload: {address}
});


export const deleteAddress = (id) => ({
	type: DELETE_ADDRESS,
	payload: {id}
});
