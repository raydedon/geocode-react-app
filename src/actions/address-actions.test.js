import * as actions from './address-actions';
import * as types from './action-types';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {expect} from 'chai';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../services/address.service', () => ({
	addressService: {
		fetchAddress: jest.fn().mockResolvedValue(['place 1', 'place 2']),
		addAddress: jest.fn().mockResolvedValue('place 1'),
		deleteAddress: jest.fn().mockResolvedValue('place 1')
	}
}));

describe('fetchAddress async action', () => {
	afterEach(() => {
		fetchMock.restore();
	});
	
	it('creates FETCH_ADDRESS_SUCCESS when fetching list of address has been done', () => {
		
		const expectedActions = [
			{
				type: types.FETCH_ADDRESS_REQUEST,
				payload: {
					address: [],
				},
			},
			{
				type: types.FETCH_ADDRESS_SUCCESS,
				payload: {
					address: ['place 1', 'place 2'],
				},
			},
		];
		const store = mockStore({
			address: {
				address: [],
			}
		});
		
		return store.dispatch(actions.fetchAddress())
			.then(() => {
				expect(store.getActions()).to.deep.equal(expectedActions);
			});
	});
	
	it('creates ADD_ADDRESS_SUCCESS when adding place', () => {
		
		const expectedActions = [
			{
				type: types.ADD_ADDRESS_REQUEST
			},
			{
				type: types.ADD_ADDRESS_SUCCESS,
				payload: {
					address: 'place 1',
				},
			},
		];
		const store = mockStore({
			address: {
				address: [],
			}
		});
		
		return store.dispatch(actions.addAddress())
			.then(() => {
				expect(store.getActions()).to.deep.equal(expectedActions);
			});
	});
	
	it('creates DELETE_ADDRESS_REQUEST when deleting address', () => {
		const PLACE_ID = 'place 1';
		
		const expectedActions = [
			{
				type: types.DELETE_ADDRESS_REQUEST
			},
			{
				type: types.DELETE_ADDRESS_SUCCESS,
				payload: {
					id: PLACE_ID
				},
			},
		];
		const store = mockStore({
			address: {
				address: [],
			}
		});
		
		return store.dispatch(actions.deleteAddress(PLACE_ID))
			.then(() => {
				expect(store.getActions()).to.deep.equal(expectedActions);
			});
	});
});
