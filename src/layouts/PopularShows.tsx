import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

interface Movie {
	id: number;
	name: string;
	poster_path: string | null;
}

export const PopularShows = () => {
	const [peoples, setPeoples] = useState<Movie[]>();
	const { data, loading } = useFetch('/tv/popular');
	console.log(data);

	useEffect(() => {
		if (data.results && Array.isArray(data.results)) {
			setPeoples(data.results);
		}
	}, [data]);

	return (
		<Carousel className='w-11/12 m-auto'>
			<h1 className='text-2xl  font-mono mb-4'>Popular Shows</h1>
			<CarouselContent>
				{peoples?.map(
					(people: Movie) =>
						!loading && (
							<CarouselItem
								key={people.id}
								className=' basis-1/3 md:basis-1/4 lg:basis-1/6'
							>
								<img
									src={`https://image.tmdb.org/t/p/w500${people.poster_path}`}
									alt='img'
								/>
							</CarouselItem>
						)
				)}
			</CarouselContent>
		</Carousel>
	);
};
