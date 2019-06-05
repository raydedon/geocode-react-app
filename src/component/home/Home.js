import React, {Component} from 'react';
import GenericList from "../generic-list/GenericList";
import Map from "../map/Map";
import './home.scss';
import {fetchAddress} from "../../actions/address-actions";
import {connect} from 'react-redux';
import Address from "../address/Address";

class Home extends Component {
	componentDidMount() {
		let {fetchAddress, address = []} = this.props;
		address.length === 0 && fetchAddress();
	}
	
	render() {
		let {address = []} = this.props;
		return (
			<div className="home">
				<Map isMarkerShown={true} />
				<GenericList list={address}
				             ItemComp={Address}
				             className="grid recipe-list container" />
			</div>
		);
	}
};

const mapStateToProps = ({address: {address = []}}) => ({address});

const mapDispatchToProps = dispatch => ({
	fetchAddress: () => dispatch(fetchAddress())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
