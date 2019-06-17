import React from 'react';
import './card-layout.scss';

const CardLayout = ({children, deleteAddress}) => (
	<div className="card-layout">
		<button type="button" className="close-btn" onClick={deleteAddress}>×</button>
		{children}
	</div>
);

export default CardLayout;