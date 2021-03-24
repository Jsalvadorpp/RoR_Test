import React from 'react';
import RestaurantCard from '../../components/restaurantCard';
import useStyles from './styles';

const restaurants = [
	{
		id: 1,
		name: 'Island Grill',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
		logo: 'images/logo1.jpg'
	},
	{
		id: 2,
		name: 'Flavoroso',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
		logo: 'images/logo2.jpg'
	},
	{
		id: 3,
		name: 'Green Curry',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
		logo: 'images/logo3.jpg'
	},
	{
		id: 4,
		name: 'El Pirata Porch',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
		logo: 'images/logo4.jpg'
	},
	{
		id: 5,
		name: 'Sweet Escape',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
		logo: 'images/logo5.jpg'
	},
	{
		id: 6,
		name: 'Salty Squid',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vel massa vel bibendum. Pellentesque eget ultricies purus. Cras ut maximus nisl. Ut porttitor gravida egestas. Morbi convallis mi posuere nisi ultricies, ac porttitor ex mollis. Integer at quam nisl.',
		logo: 'images/logo6.jpg'
	}
];

export default function Home() {
	const classes = useStyles();

	console.log(restaurants);

	return (
		<div className={classes.homeWrapper}>
			<div className={classes.textWrapper}>
				<h1 className={classes.primaryTitle}>All Restaurants</h1>
				<h5>Here you can see all info related about our restaurants</h5>
			</div>

			<div className="row">
				{restaurants.map((item) => (
					<div className="col-md-4">
						<RestaurantCard restaurant={item} />
					</div>
				))}
			</div>
		</div>
	);
}
