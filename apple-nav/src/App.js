import React from 'react';
import NavWrapper from './components/NavWrapper';

const appleData = [
	{ label: 'logo', link: '/', products: ['macbook air, macbook pro'] },
	{ label: 'Mac', link: '/mac', products: ['imac', 'mac pro'] },
	{ label: 'Ipad', link: '/ipad', products: ['ipad mini', 'ipad pro'] },
	{ label: 'Iphone', link: '/iphone', products: ['iphone Xr', 'iphone 8'] },
	{ label: 'Watch', link: '/watch', products: ['watch 4', 'watch 3'] },
	{ label: 'TV', link: '/tv', products: ['apple tv', 'remote'] },
];

export default function App() {
	return <NavWrapper data={appleData} />;
}
