import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function Nav({family}) {
  // console.log(family);

  const MyStyledLink = styled(Link)`
    text-decoration: none;
    color: white;
  `;

	return (
	  <MyStyledLink to={family.link}>{family.label}</MyStyledLink>
	);
}
