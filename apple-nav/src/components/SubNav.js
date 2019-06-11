import React from 'react';
import styled from 'styled-components';



export default function SubNav({products}) {
  // console.log(products);

	const Bottom = styled.div`
		background-color: lightblue;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	`;


	return (
		<Bottom>
			{products.map(product => (
				<div>{product}</div>
			))}
		</Bottom>
	);
}
