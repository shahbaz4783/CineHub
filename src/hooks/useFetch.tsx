import { useEffect, useState } from 'react';
import { fetchData } from '@/utils/api';

export const useFetch = (url: string) => {
	const [data, setData] = useState<any>(false);
	const [loading, setLoading] = useState<string | boolean>(false);
	const [error, setError] = useState<string | boolean>(false);

	useEffect(() => {
		setLoading('loading...');
		setError(false);
		setData(false);

		fetchData(url)
			.then((res) => {
				setLoading(false);
				setData(res);
			})
			.catch((error) => {
				setLoading(false);
				setError('Something Went Wrong');
				console.log(error);
			});
	}, [url]);
	return { data, loading, error };
};
