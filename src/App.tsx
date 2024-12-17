import Header from './components/Header/Header';
import FeaturesSection from './sections/FeaturesSection';
import MainSection from './sections/MainSection';
import Solutions from './sections/Solutions';

export default function App() {
	return (
		<>
			<Header />
			<MainSection />
			<FeaturesSection />
			<Solutions />
			<a href='https://storyset.com/people'>People illustrations by Storyset</a>
		</>
	);
}
