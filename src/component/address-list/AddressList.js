import React from 'react';
import GenericList from '../generic-list/GenericList';
import {connect} from 'react-redux';
import Autocomplete from 'react-google-autocomplete';
import Address from '../address/Address';
import {addAddress} from '../../actions/address-actions';
import './address-list.scss';

const AddressList = ({address = [], addAddress}) => {
	return (
		<div className="address-list-container">
			<Autocomplete
				onPlaceSelected={(place) => {
					console.log(JSON.stringify(place.geometry.location));
					addAddress({...place, id: place.place_id});
				}}
				types={['(regions)']}
				componentRestrictions={{country: 'de'}}
			/>
			<GenericList
				list={address}
				ItemComp={Address}
				className="grid recipe-list container" />
		</div>
	);
};

const mapStateToProps = ({address: {address = []}}) => ({address});

const mapDispatchToProps = dispatch => ({
	addAddress: (place) => dispatch(addAddress(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressList);
