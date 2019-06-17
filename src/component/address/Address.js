import React from 'react';
import './address.scss';
import CardLayout from '../card/CardLayout';
import {connect} from 'react-redux';
import {deleteAddress} from '../../actions/address-actions';

export const Address = ({
	                 formatted_address: formattedAddress = '',
	                 lat,
	                 lng,
	                 id,
	                 deleteAddress
}) => {
	return (
		<CardLayout deleteAddress={() => deleteAddress(id)}>
			<div className="address-text">{formattedAddress}</div>
			<div className="latitude-text">{lat}</div>
			<div className="longitude-text">{lng}</div>
		</CardLayout>
	);
};

const mapStateToProps = (state, ownProps) => ({...ownProps});

const mapDispatchToProps = dispatch => ({
	deleteAddress: id => dispatch(deleteAddress(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
