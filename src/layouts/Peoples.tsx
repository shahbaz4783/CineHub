import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { CardContent } from '@/components/ui/card';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

interface Person {
	id: number;
	name: string;
	profile_path: string | null;
}

export const Peoples = () => {
	const [peoples, setPeoples] = useState<Person[]>();
	const { data, loading } = useFetch('/person/popular');

	useEffect(() => {
		if (data.results && Array.isArray(data.results)) {
			setPeoples(data.results);
		}
	}, [data]);

	return (
		<Carousel className='w-11/12 m-auto'>
			<h1 className='text-2xl font-mono mb-4'>
				Popular Peoples
			</h1>
			<CarouselContent>
				{peoples?.map(
					(people: Person) =>
						!loading && (
							<CarouselItem
								key={people.id}
								className=' basis-1/3 md:basis-1/4 lg:basis-1/12'
							>
								<CardContent className='border p-0 flex flex-col aspect-square items-center justify-center'>
									<img
										src={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
										alt='img'
									/>
								</CardContent>
							</CarouselItem>
						)
				)}
			</CarouselContent>
		</Carousel>
	);
};
