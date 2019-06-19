import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CardLayout from './CardLayout';

describe('<CardLayout />', () => {
	it('onClick calls the deleteAddress method', () => {
		const deleteAddress = jest.fn();
		const event = {
			preventDefault: () => {},
			stopPropagation: () => {}
		};
		const wrapper = shallow(<CardLayout deleteAddress={deleteAddress} />);
		wrapper.find('button').simulate('click', event);
		expect(deleteAddress.mock.calls).to.have.lengthOf(1);
	});
});