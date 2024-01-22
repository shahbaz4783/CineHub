import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';

export const Home = () => {
	const [movies, setMovies] = useState<any>();
	const { data, loading } = useFetch('/movie/popular');

	useEffect(() => {
		setMovies(data.results);
	}, [data]);

	return (
		<div>
			{movies?.map(
				(movie: any) => !loading && <li key={movie.id}>{movie.title}</li>
			)}
		</div>
	);
};
