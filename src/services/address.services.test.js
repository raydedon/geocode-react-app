import {expect} from 'chai';
import {fetchAddress} from "./address.service";
import {fetchMock} from 'fetch-mock';

describe('async actions', () => {
	it('fetchAddress should return list of address', () => {
		const listOfAddress = [
			{id: 'address-1'},
			{id: 'address-2'}
		];


		expect(fetchAddress()).to.deep.equal(listOfAddress);
	});

	it('addAddress should return list of address', () => {
	});

	it('deleteAddress should return list of address', () => {
	});
});