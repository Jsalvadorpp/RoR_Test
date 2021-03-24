import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import useStyles from './styles';

export default function Restaurant(props) {
	const { id } = useParams();

	useEffect(() => {
		console.log(id);
	}, []);

	//const classes = useStyles();

	return <div>Restaurant view</div>;
}
