import React from 'react';
import { Link, Route } from 'react-router-dom';
import SubNav from './SubNav';
import styled from 'styled-components';


export default function Nav(props) {
  // console.log(props.obj);
  
  const MyStyledHeader = styled.div`
    background-color: grey;
    display: flex;

  `;

    const MyStyledLink = styled(Link)`
    text-decoration: none;
    color: white;
  `;

	return (
		<MyStyledHeader>
			<MyStyledLink to={props.obj.link}>{props.obj.label}</MyStyledLink>
			<Route
				exact
				path={props.obj.link}
				render={test => <SubNav {...test} props={props.obj.products} />}
			/>
		</MyStyledHeader>
	);
}
