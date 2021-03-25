import { base_url } from '../api';
import axios from 'axios';

const getRestaurants = async () => {
	return await axios.get(`${base_url}/restaurants`);
};
const getOneRestaurant = async (id) => {
	return await axios.get(`${base_url}/restaurant/${id}`);
};
const postComment = async (id, data) => {
	return await axios.post(`${base_url}/restaurant/${id}/comment`, data);
};

const Restaurant = {
	getRestaurants,
	getOneRestaurant,
	postComment
};
export default Restaurant;
