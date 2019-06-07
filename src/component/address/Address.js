import React from 'react';
import './address.scss';
import CardLayout from '../card/Card';

const Address = (address) => {
	let {formatted_address: formattedAddress = '', geometry: {location: {lat, lng}}} = address;
	return (
		<CardLayout>
			<div className="address-text">{formattedAddress}</div>
			<div className="longitude-text">{lat()}</div>
			<div className="longitude-text">{lng()}</div>
		</CardLayout>
	);
};

export default Address;
