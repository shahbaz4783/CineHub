import { ThemeProvider } from './components/theme-provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Root } from './pages/Root';
import { Movies } from './pages/Movies';
import { Shows } from './pages/Shows';
import { Details } from './pages/Details';
import { Error } from './pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'movies', element: <Movies /> },
			{ path: 'shows', element: <Shows /> },
			{ path: 'movies/:id', element: <Details /> },
			{ path: 'shows/:id', element: <Details /> },
		],
	},
]);

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
