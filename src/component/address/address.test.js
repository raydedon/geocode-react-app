import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Address from "./Address";

describe('<Address />', () => {
	it('Address component should have CardLayout component', () => {
		const wrapper = shallow(<Address />);
		expect(wrapper.find('CardLayout')).to.equal(true);
	});
});
