import React, {Component} from 'react';
import {connect} from 'react-redux';
import GenericList from '../generic-list/GenericList';
import Map from '../map/Map';
import './home.scss';
import {fetchAddress} from '../../actions/address-actions';
import Address from '../address/Address';

class Home extends Component {
	render() {
		const {address = []} = this.props;
		return (
			<div className="home">
				<Map isMarkerShown />
				<GenericList
					list={address}
					ItemComp={Address}
					className="grid recipe-list container"
				/>
			</div>
		);
	}
}

const mapStateToProps = ({address: {address = []}}) => ({address});

const mapDispatchToProps = dispatch => ({
	fetchAddress: () => dispatch(fetchAddress()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
