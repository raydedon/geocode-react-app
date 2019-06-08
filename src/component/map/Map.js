import React from 'react';
import {compose, withProps} from 'recompose';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import './map.scss';
import {connect} from 'react-redux';
import {GERMANY} from '../../util';

const Map = compose(
	withProps({
		loadingElement: <div style={{height: '100%'}} />,
		containerElement: <div className="map-container" />,
		mapElement: <div style={{height: '100%'}} />,
	}),
	withGoogleMap,
)(({address = []}) => (
	<GoogleMap
		defaultZoom={5}
		defaultCenter={GERMANY}
	>
		{address.map(({geometry: {location}, id}) => (
			<Marker position={location} key={id} />
		))}
	</GoogleMap>
));

const mapStateToProps = ({address: {address = []}}, ownProps) => ({address, ...ownProps});

export default connect(mapStateToProps)(Map);
