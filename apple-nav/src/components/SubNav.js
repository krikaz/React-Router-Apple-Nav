import React from 'react';
import styled from 'styled-components';



export default function SubNav(props) {
  // console.log(props);

//   const MyStyledDiv = styled(Link)`
//   text-decoration: none;
//   color: white;
// `;


	return (
		<div>
			{props.props.map(product => (
				<div>{product}</div>
			))}
		</div>
	);
}
