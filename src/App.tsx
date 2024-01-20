import { ThemeProvider } from './components/theme-provider';
import { fetchData } from './utils/api';
import { Header } from './layouts/Header';
function App() {
  fetchData('/discover/movie').then((res) => {
		console.log(res);
	});
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header />
		</ThemeProvider>
	);
}

export default App;
