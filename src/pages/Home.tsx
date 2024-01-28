import { Peoples } from "@/layouts/Peoples";
import { PopularMovies } from '@/layouts/PopularMovies';
import { PopularShows } from "@/layouts/PopularShows";

export const Home = () => {
	
	return (
		<main className="flex flex-col gap-16">
			<Peoples />
			<PopularMovies />
			<PopularShows />
		</main>
	);
};
