import React from 'react';

const Address = ({title, address, latitude, longitude}) => (
	<div className="address">
		<h1>{title}</h1>
		<div className="address-text">{address}</div>
		<div className="longitude-text">{`${longitude}, ${latitude}`}</div>
	</div>
);

export default Address;
