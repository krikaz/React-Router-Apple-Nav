import React from 'react';
import { Link, Route } from 'react-router-dom';
import SubNav from './SubNav';

export default function Nav(props) {
  // console.log(props.obj);
	return (
		<div>
			<Link to={props.obj.link}>{props.obj.label}</Link>
      <Route 
        exact path={props.obj.link} 
        render={test => (
          <SubNav {...test} props={props.obj.products} />
        )} 
      />
		</div>
	);
}
