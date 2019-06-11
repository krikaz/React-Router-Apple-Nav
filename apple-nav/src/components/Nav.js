import React from 'react';
import { Link, Route } from 'react-router-dom';
import SubNav from './SubNav';
import styled from 'styled-components';


export default function Nav({family}) {
  // console.log(props.obj);
  
  const MyStyledHeader = styled.div`
    background-color: grey;
    display: flex;
    flex-direction: column;

  `;

    const MyStyledLink = styled(Link)`
    text-decoration: none;
    color: white;
  `;

	return (
		<MyStyledHeader>
			<MyStyledLink to={family.link}>{family.label}</MyStyledLink>

		</MyStyledHeader>
	);
}
