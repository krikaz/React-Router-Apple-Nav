import React from 'react';
import Nav from './Nav';

export default function NavWrapper(props) {
	return (
		<div>
			{props.data.map(obj => (
				<Nav key={obj.label} obj={obj} />
			))}
		</div>
	);
}
