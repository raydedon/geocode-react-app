import React from 'react';
import './card.scss';

const CardLayout = ({children, showModal}) => (
	<div className="card-layout">
		<button type="button" className="close-btn" onClick={showModal}>×</button>
		{children}
	</div>
);

export default CardLayout;