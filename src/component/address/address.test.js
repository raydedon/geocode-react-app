import React from 'react';
import {shallow, mount} from 'enzyme';
import {Address} from './Address';
import CardLayout from '../card/CardLayout';


describe('<Address />', () => {
	it('Address component should have CardLayout component', () => {
		const wrapper = shallow(<Address />);
		expect(wrapper.find(CardLayout).length).toEqual(1);
	});

	it('Address component should display latitude', () => {
		const wrapper = shallow(<Address lat="18.9" />);
		expect(wrapper.find('.latitude-text').text()).toEqual('18.9');
	});

	it('onClick calls the deleteAddress method with the desired id', () => {
		const deleteAddress = jest.fn();
		const event = {
			preventDefault: () => {},
			stopPropagation: () => {}
		};
		const TEST_ID = 'XYZ';
		const wrapper = mount(<Address deleteAddress={deleteAddress} id={TEST_ID} />);
		wrapper.find('button').simulate('click', event);
		expect(deleteAddress).toBeCalledWith(TEST_ID);
	});

});
