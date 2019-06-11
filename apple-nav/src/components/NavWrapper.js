import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

export default function NavWrapper(props) {
	const MyStyledWrapper = styled.div`
		background-color: grey;
		display: flex;
		justify-content: space-around;
	`;

	return (
		<MyStyledWrapper>
			{props.data.map(obj => (
				<Nav key={obj.label} obj={obj} />
			))}
		</MyStyledWrapper>
	);
}
