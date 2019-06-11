import React from 'react';

export default function SubNav(props) {
  // console.log(props);
	return (
		<div>
			{props.props.map(product => (
				<div>{product}</div>
			))}
		</div>
	);
}
