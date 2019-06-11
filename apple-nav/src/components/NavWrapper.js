import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import SubNav from './SubNav';
import { Route } from 'react-router-dom';

export default function NavWrapper({ data }) {
	console.log(data);

	const MyStyledWrapper = styled.div`
		background-color: grey;
		display: flex;
		justify-content: space-around;
	`;

	return (
		<MyStyledWrapper>
			{data.map(family => (
				<Nav key={family.label} family={family} />
			))}

			{data.map(family => (
				<Route
					exact
					path={family.link}
					render={props => <SubNav {...props} products={family.products} />}
				/>
			))}
		</MyStyledWrapper>
	);
}
