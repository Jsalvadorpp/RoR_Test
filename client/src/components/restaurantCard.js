import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	restaurantBox: {
		borderRadius: '5px',
		backgroundColor: 'white',
		boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)',
		marginBottom: '30px'
	},
	img: {
		width: '100%',
		height: '250px',
		objectFit: 'cover',
		borderRadius: '5px 5px 0px 0px',
		boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.06)',
		'&:hover': {
			cursor: 'pointer',
			opacity: '0.8'
		}
	},
	description: {
		color: '#655d5b'
	},
	seeMore: {
		color: '#F7931E',
		textDecoration: 'none',
		'&:hover': {
			cursor: 'pointer',
			textDecoration: 'underline',
			color: '#F7931E'
		}
	}
});

export default function RestaurantCard(props) {
	const { restaurant } = props;
	const classes = useStyles();

	return (
		<div className={classes.restaurantBox}>
			<img src={restaurant.logoUrl} className={classes.img} alt={restaurant.name} />
			<div className="card-body p-3" style={{ minHeight: '150px' }}>
				<h4 className={classes.name}>{restaurant.name}</h4>
				<p className={classes.description}>{trucateTxt(restaurant.description)}</p>
				<div className="d-flex justify-content-end">
					<Link className={classes.seeMore} to={`/restaurant/${restaurant.id}`}>
						SEE MORE...
					</Link>
				</div>
			</div>
		</div>
	);
}

const trucateTxt = (string) => {
	if (string.length > 60) {
		return string.substring(0, 60) + '...';
	}
	return string;
};
