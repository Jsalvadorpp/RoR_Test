import React from 'react';
import { makeStyles } from '@material-ui/styles';
const moment = require('moment');

const useStyles = makeStyles({
	userName: {
		color: '#F7931E',
		fontWeight: 'bold'
	},
	text: {
		color: '#655d5b'
	}
});

export default function Comment(props) {
	const { comment } = props;
	const classes = useStyles();

	return (
		<div>
			<p className="mb-1">
				<span className={classes.userName}>{comment.userName}</span> at{' '}
				{moment(comment.created_at).format('DD/MM/YYYY')}
			</p>
			<p className={classes.text}>{comment.bodyText}</p>
		</div>
	);
}
