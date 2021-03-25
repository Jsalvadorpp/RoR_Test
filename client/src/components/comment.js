import React from 'react';
import { makeStyles } from '@material-ui/styles';

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
				<span className={classes.userName}>{comment.byUser}</span> at {comment.date}
			</p>
			<p className={classes.text}>{comment.text}</p>
		</div>
	);
}
