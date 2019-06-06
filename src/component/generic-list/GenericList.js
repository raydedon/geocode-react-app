import React from 'react';
import './generic-list.scss';
import Address from '../address/Address';

const GenericList = ({list = [], ItemComp = Address, className = ''}) => {
	if(list.length === 0) return null;

	return (
		<div className={`generic-list ${className}`}>
			{list.map(i => (
				<ItemComp {...i} key={i.id} />
			))}
		</div>
	);
};

export default GenericList;
