import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';
import Map from '../map/Map';
import Home from './Home';
import AddressList from '../address-list/AddressList';

configure({adapter: new Adapter()});

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
