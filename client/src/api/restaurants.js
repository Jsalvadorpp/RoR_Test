import { base_url } from '../api';
import axios from 'axios';

const getRestaurants = async () => {
	return await axios.get(`${base_url}/restaurants`);
};
const getOneRestaurant = async (id) => {
	return await axios.get(`${base_url}/restaurant/${id}`);
};

export default {
	getRestaurants,
	getOneRestaurant
};
