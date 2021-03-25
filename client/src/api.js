//in this file , we make reference to all apis calls coming from the api folder
import restaurants from './api/restaurants';

const API = {
	restaurants
};
export default API;

//Local server
//export const base_url = 'http://127.0.0.1:3000';

//Heroku Server
export const base_url = 'https://obscure-refuge-85543.herokuapp.com';
