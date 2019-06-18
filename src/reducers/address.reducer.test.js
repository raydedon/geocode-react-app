import {expect} from 'chai';
import {address} from './address.reducer';

describe('Recipe reducer', () => {
	const INITIAL_RECIPE_STATE = {address: []};

	it('should return the initial state', () => {
		expect(address(undefined, {})).to.deep.equal(INITIAL_RECIPE_STATE);
	});

	it('should handle FETCH_ADDRESS_REQUEST', () => {
		const action = {
			type: 'FETCH_ADDRESS_REQUEST'
		};

		const expectedState = {
			address: [],
			loadingAddress: true
		};

		expect(address(INITIAL_RECIPE_STATE, action)).to.deep.equal(expectedState);
	});

	it('should handle FETCH_ADDRESS_SUCCESS', () => {
		const listOfAddress = [
			{id: 'address-1'},
			{id: 'address-2'}
		];
		const action = {
			type: 'FETCH_ADDRESS_SUCCESS',
			payload: {address: listOfAddress}
		};
		const expectedState = {
			address: listOfAddress,
			loadingAddress: false
		};

		expect(address(INITIAL_RECIPE_STATE, action)).to.deep.equal(expectedState);
	});

	it('should handle FETCH_ADDRESS_FAILURE', () => {
		const action = {
			type: 'FETCH_ADDRESS_FAILURE',
			payload: {error: new Error()}
		};
		const expectedState = {
			address: [],
			loadingAddress: false
		};

		expect(address(INITIAL_RECIPE_STATE, action)).to.deep.equal(expectedState);
	});

	it('should handle ADD_ADDRESS_SUCCESS', () => {
		const addressTobeAdded = {id: 'address-3'};
		const action = {
			type: 'ADD_ADDRESS_SUCCESS',
			payload: {address: addressTobeAdded}
		};
		const expectedState = {
			address: [addressTobeAdded]
		};

		expect(address(INITIAL_RECIPE_STATE, action)).to.deep.equal(expectedState);
	});

	it('should handle DELETE_ADDRESS_SUCCESS', () => {
		const addressIdToBeDeleted = 'address-1';
		const listOfAddress = [
			{id: 'address-1'},
			{id: 'address-2'}
		];
		const action = {
			type: 'DELETE_ADDRESS_SUCCESS',
			payload: {id: addressIdToBeDeleted}
		};
		const expectedState = {
			address: [{id: 'address-2'}]
		};
		const INITIAL_RECIPE_STATE = {address: listOfAddress};

		expect(address(INITIAL_RECIPE_STATE, action)).to.deep.equal(expectedState);
	});
});
