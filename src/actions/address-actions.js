import {
	ADD_ADDRESS_FAILURE,
	ADD_ADDRESS_REQUEST,
	ADD_ADDRESS_SUCCESS,
	DELETE_ADDRESS_FAILURE,
	DELETE_ADDRESS_REQUEST,
	DELETE_ADDRESS_SUCCESS,
	FETCH_ADDRESS_FAILURE,
	FETCH_ADDRESS_REQUEST,
	FETCH_ADDRESS_SUCCESS,
} from './action-types';
import {addressService} from '../services/address.service';

export function fetchAddress() {
	const request = () => ({
		type: FETCH_ADDRESS_REQUEST,
		payload: {address: []},
	});
	const success = address => ({
		type: FETCH_ADDRESS_SUCCESS,
		payload: {address},
	});
	const failure = error => ({type: FETCH_ADDRESS_FAILURE, payload: {error}});

	return (dispatch) => {
		dispatch(request());

		return addressService
			.fetchAddress()
			.then(
				addresses => dispatch(success(addresses)),
				error => dispatch(failure(error)),
			);
	};
}

export function addAddress(address) {
	const request = () => ({
		type: ADD_ADDRESS_REQUEST,
	});
	const success = address => ({
		type: ADD_ADDRESS_SUCCESS,
		payload: {address},
	});
	const failure = error => ({type: ADD_ADDRESS_FAILURE, payload: {error}});

	return dispatch => {
		dispatch(request());

		return addressService
			.addAddress(address)
			.then(
				address => dispatch(success(address)),
				error => dispatch(failure(error)),
			);
	};
}

export function deleteAddress(id) {
	const request = () => ({
		type: DELETE_ADDRESS_REQUEST
	});
	const success = id => ({
		type: DELETE_ADDRESS_SUCCESS,
		payload: {id},
	});
	const failure = error => ({type: DELETE_ADDRESS_FAILURE, payload: {error}});

	return dispatch => {
		dispatch(request());

		return addressService
			.deleteAddress(id)
			.then(
				() => dispatch(success(id)),
				error => dispatch(failure(error)),
			);
	};
}
