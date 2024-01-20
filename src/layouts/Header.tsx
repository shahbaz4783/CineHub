import { ModeToggle } from '@/components/mode-toggle';

export const Header = () => {
	return (
		<header className='border-b'>
			<section className='py-4 flex justify-between w-11/12 m-auto'>
				<div>
					<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-sans'>
						CineHub
					</h1>
				</div>
				<nav className='flex gap-4 justify-between items-center fixed bottom-0 left-0 py-2 px-2 border-t w-full md:static md:border-none md:w-min'>
					<a href='/'>Home</a>
					<a href='/'>Movies</a>
					<a href='/'>Shows</a>
					<a href='/'>Profile</a>
				</nav>
					<ModeToggle />
			</section>
		</header>
	);
};
