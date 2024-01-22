import { fetchData } from '@/utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfig } from '@/store/homeSlice';

export const Home = () => {
	const dispatch = useDispatch();
	// const data = useSelector((state) => state.home);



	fetchData('/movie/popular').then((res) => {
		dispatch(getApiConfig(res));
	});

	return <div>hi</div>;
};
