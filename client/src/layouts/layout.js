import React from 'react';

export default function Layout({ children }) {
	return (
		<div>
			navbar<br />
			{children}
			footer<br />
		</div>
	);
}
