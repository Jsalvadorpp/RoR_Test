import React from 'react';
import useStyles from './styles';

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.footer}>
			{/* Copyright */}
			<p className={classes.copyright}>© 2021 Made By Jose Salvador</p>
		</div>
	);
}
