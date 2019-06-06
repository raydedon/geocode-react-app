import React from 'react';
import {compose, withProps} from 'recompose';
import {
	withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';
import './map.scss';

const Map = compose(
	withProps({
		googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDYdkn7zmppgY-QI568VL7vy994E4gGrwY',
		loadingElement: <div style={{height: '100%'}} />,
		containerElement: <div className="map-container" />,
		mapElement: <div style={{height: '100%'}} />,
	}),
	withScriptjs,
	withGoogleMap,
)(props => (
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{lat: -34.397, lng: 150.644}}
	>
		{props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}} />}
	</GoogleMap>
));

export default Map;
