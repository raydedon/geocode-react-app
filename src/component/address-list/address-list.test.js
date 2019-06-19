import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {AddressList} from './AddressList';
import Autocomplete from 'react-google-autocomplete';
import GenericList from '../generic-list/GenericList';


describe('<AddressList />', () => {
	it('AddressList component should have Autocomplete component', () => {
		const wrapper = shallow(<AddressList />);
		expect(wrapper.find(Autocomplete)).to.have.lengthOf(1);
	});

	it('AddressList component should have GenericList component', () => {
		const wrapper = shallow(<AddressList />);
		expect(wrapper.find(GenericList)).to.have.lengthOf(1);
	});
});