import { Outlet } from 'react-router-dom';
import { Header } from '@/layouts/Header';

export const Root = () => {
	return (
    <>
    <Header />
		<main>
			<Outlet />
		</main>
    </>
	);
};
