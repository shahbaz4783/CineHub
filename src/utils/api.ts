import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const fetchData = async (url: string) => {
	try {
		const { data } = await axios.get(BASE_URL + url + `?api_key=${API_KEY}`);
		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
};
