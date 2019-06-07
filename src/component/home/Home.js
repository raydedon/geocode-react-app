import React, {Component} from 'react';
import AddressList from '../address-list/AddressList';
import Map from '../map/Map';
import './home.scss';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<Map isMarkerShown />
				<AddressList />
			</div>
		);
	}
}
