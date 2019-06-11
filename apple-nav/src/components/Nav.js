import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function Nav(props) {
	return (
		<div>
			<Link to={props.obj.link}>{props.obj.label}</Link>
			<Route path={props.obj.link} component={props.obj.Component} />
		</div>
	);
}
