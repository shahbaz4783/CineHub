import { useFetch } from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
			<h1 className='text-2xl font-semibold font-serif mb-4'>
				Popular Peoples
			</h1>
			<CarouselContent className='-ml-1'>
				{peoples?.map(
					(people: Person) =>
						!loading && (
							<CarouselItem
								key={people.id}
								className=' basis-1/2 md:basis-1/3 lg:basis-1/6'
							>
								<CardContent className='border p-0 flex flex-col aspect-square items-center justify-center'>
									<img
										src={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
										alt='img'
									/>
									<p className='text-sm md:text-md font-mono truncate text-ellipsis overflow-hidden ...'>
										{people.name}
									</p>
								</CardContent>
							</CarouselItem>
						)
				)}
			</CarouselContent>
		</Carousel>
	);
};
