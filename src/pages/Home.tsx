import { fetchData } from '@/utils/api';

export const Home = () => {
	fetchData('/discover/movie').then((res) => {
		console.log(res.results);
	});
	return (
		<div>
		</div>
	);
};
