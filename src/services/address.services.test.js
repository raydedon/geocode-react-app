import {expect} from 'chai';
import {addressService} from './address.service';
const address = [
	{id: 'address-1'},
	{id: 'address-2'}
];

describe('async services', () => {
	beforeEach(function() {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, json: () => address}));
	});

	it('fetchAddress should return list of address', () => {
		addressService.fetchAddress().then(r => {
			expect(r).to.deep.equal(address);
		});
	});

	it('addAddress should return address', () => {
		addressService.addAddress().then(r => {
			expect(r).to.deep.equal(address);
		});
	});

	it('deleteAddress should delete address', () => {
		addressService.deleteAddress().then(r => {
			expect(r).to.deep.equal(address);
		});
	});
});