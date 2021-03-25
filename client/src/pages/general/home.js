import React, { useState, useEffect } from 'react';
import RestaurantCard from '../../components/restaurantCard';
import useStyles from './styles';
import API from '../../api';
import { toast } from 'react-toastify';

export default function Home() {
	const classes = useStyles();

	//states
	const [ restaurants, setRestaurnts ] = useState([]);

	//component did mount
	useEffect(() => {
		getRestaurants();
	}, []);

	const getRestaurants = () => {
		API.restaurants
			.getRestaurants()
			.then((res) => {
				let response = res.data;
				setRestaurnts(response.data);
			})
			.catch((err) => {
				toast.error('Something bad happend');
			});
	};

	return (
		<div className={classes.homeWrapper}>
			<div className={classes.textWrapper}>
				<h1 className={classes.primaryTitle}>All Restaurants</h1>
				<h5>Here you can see all info related about our restaurants</h5>
			</div>

			<div className="row">
				{restaurants.map((item) => (
					<div className="col-md-4">
						<RestaurantCard restaurant={item} key={item.id} />
					</div>
				))}
			</div>
		</div>
	);
}
