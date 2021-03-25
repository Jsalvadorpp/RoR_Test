import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './styles';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';
//components
import Comment from '../../components/comment';

const restaurant = {
	id: 1,
	name: 'Island Grill',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
	logo: '/images/logo1.jpg'
};

const comments = [
	{
		id: 1,
		byUser: 'username1',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
		date: '21/01/2020'
	},
	{
		id: 2,
		byUser: 'name lastname',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
		date: '22/01/2020'
	}
];

export default function Restaurant(props) {
	const { id } = useParams();

	useEffect(() => {
		console.log(id);
	}, []);

	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			{/*  Restaurant Info */}
			<div className="row">
				<div className="col-sm-2">
					<img className={classes.logo} src={restaurant.logo} alt={restaurant.name} />
				</div>
				<div className="col-sm-10 d-flex flex-column justify-content-center">
					<h1 className={classes.name}>{restaurant.name}</h1>
					<p className={classes.description}>{restaurant.description}</p>
				</div>
			</div>

			{/* 	Restaurant Gallery Photos */}
			<h4 className={classes.primaryText}>Gallery</h4>
			<div className="row mb-5">
				<div className="col-md-3">
					<img src="/images/gallery1.jpg" className={classes.galleryPhoto} />
				</div>
				<div className="col-md-3">
					<img src="/images/gallery1.jpg" className={classes.galleryPhoto} />
				</div>
				<div className="col-md-3">
					<img src="/images/gallery1.jpg" className={classes.galleryPhoto} />
				</div>
				<div className="col-md-3">
					<img src="/images/gallery1.jpg" className={classes.galleryPhoto} />
				</div>
			</div>

			{/* Comments Section */}
			<h4 className={classes.primaryText}>Comments</h4>

			{comments.map((comment) => (
				<React.Fragment>
					<Comment comment={comment} />
					<div className={classes.divider} />
				</React.Fragment>
			))}
			<div className="mb-4" />

			{/* 	New Comment Form */}
			<h4 className={classes.primaryText}>Write new comment</h4>
			<form>
				<div className="form-group">
					<label for="name" className={classes.label}>
						Name
					</label>
					<input type="email" className="form-control" id="name" required />
				</div>

				<div className="form-group">
					<label for="text" className={classes.label}>
						Comment
					</label>
					<textarea className="form-control" id="text" rows="3" required />
				</div>

				<div className="d-flex justify-content-end">
					<Ui.Button color="primary" variant="contained" endIcon={<Icon.Send />} className={classes.sendBtn}>
						Send
					</Ui.Button>
				</div>
			</form>
		</div>
	);
}
