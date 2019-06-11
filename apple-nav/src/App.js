import React from 'react';
import NavWrapper from './components/NavWrapper';

const appleData = [
	{ label: 'logo', link: '/', products: ['home'] },
	{
		label: 'Mac',
		link: '/mac',
		products: ['macbook air', 'macbook pro', 'imac', 'mac pro'],
	},
	{ label: 'Ipad', link: '/ipad', products: ['ipad mini', 'ipad', 'ipad pro'] },
	{ label: 'Iphone', link: '/iphone', products: ['iphone Xs', 'iphone Xr', 'iphone 8', 'iphone 7'] },
	{ label: 'Watch', link: '/watch', products: ['watch 4', 'watch 3'] },
	{ label: 'TV', link: '/tv', products: ['apple tv', 'remote'] },
];

export default function App() {
	return <NavWrapper data={appleData} />;
}
