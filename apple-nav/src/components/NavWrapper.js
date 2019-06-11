import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import SubNav from './SubNav';
import { Route } from 'react-router-dom';

export default function NavWrapper({ data }) {
	// console.log(data);

	const MyStyledWrapper = styled.div`
		background-color: grey;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	`;

	const Top = styled.div`
		background-color: green;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	`;


	return (
		<MyStyledWrapper>
			<Top>
				{data.map(family => (
					<Nav family={family} />
				))}
			</Top>

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
