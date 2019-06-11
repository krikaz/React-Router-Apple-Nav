import React from 'react';
import styled from 'styled-components';



export default function SubNav({products}) {
  // console.log(props);

//   const MyStyledDiv = styled(Link)`
//   text-decoration: none;
//   color: white;
// `;


	return (
		<div>
			{products.map(product => (
				<div>{product}</div>
			))}
		</div>
	);
}
