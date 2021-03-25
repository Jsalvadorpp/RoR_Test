import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './styles';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import API from '../../api';
import { toast } from 'react-toastify';
//components
import Comment from '../../components/comment';

export default function Restaurant(props) {
	const classes = useStyles();
	const { id } = useParams();

	//states
	const [ restaurant, setRestaurant ] = useState({
		name: '',
		description: '',
		logoUrl: '',
		gallery: []
	});
	const [ comments, setComments ] = useState([]);

	//component did mount
	useEffect(() => {
		getRestaurantInfo(id);
	}, []);

	const getRestaurantInfo = (id) => {
		API.restaurants
			.getOneRestaurant(id)
			.then((res) => {
				let response = res.data;
				setRestaurant(response.data.restaurant);
				setComments(response.data.comments);
			})
			.catch((err) => {
				toast.error('Something bad happend');
			});
	};

	return (
		<div className={classes.wrapper}>
			{/*  Restaurant Info */}
			<div className="row">
				<div className="col-sm-2">
					<img className={classes.logo} src={restaurant.logoUrl} alt={restaurant.name} />
				</div>
				<div className="col-sm-10 d-flex flex-column justify-content-center">
					<h1 className={classes.name}>{restaurant.name}</h1>
					<p className={classes.description}>{restaurant.description}</p>
				</div>
			</div>

			{/* 	Restaurant Gallery Photos */}
			<h4 className={classes.primaryText}>Gallery</h4>
			<div className="row mb-5">
				{restaurant.gallery.map((photo) => (
					<div className="col-md-3">
						<img src={photo} className={classes.galleryPhoto} />
					</div>
				))}
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
