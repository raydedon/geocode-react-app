import React from 'react';
import './address.scss';
import CardLayout from '../card/Card';
import {connect} from 'react-redux';
import {deleteAddress} from '../../actions/address-actions';

const Address = ({
	                 formatted_address: formattedAddress = '',
	                 geometry: {location: {lat, lng}},
	                 place_id: id,
	                 deleteAddress
}) => {
	return (
		<CardLayout deleteAddress={() => deleteAddress(id)}>
			<div className="address-text">{formattedAddress}</div>
			<div className="longitude-text">{lat()}</div>
			<div className="longitude-text">{lng()}</div>
		</CardLayout>
	);
};


const mapStateToProps = (state, ownProps) => ({...ownProps});

const mapDispatchToProps = dispatch => ({
	deleteAddress: id => dispatch(deleteAddress(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
