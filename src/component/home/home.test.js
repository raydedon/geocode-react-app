import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Map from '../map/Map';
import Home from './Home';
import AddressList from '../address-list/AddressList';

describe('<Home />', () => {
	it('Home component should have Map component', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.find(Map)).to.have.lengthOf(1);
	});

	it('Home component should have AddressList component', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.find(AddressList)).to.have.lengthOf(1);
	});
});
