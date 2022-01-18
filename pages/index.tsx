import type { NextPage } from 'next';
import Contact from '../app/components/Contact/Contact';
import Content from '../app/components/Content/Content';
import Features from '../app/components/Features/Features';
import Footer from '../app/components/Footer/Footer';
import Hero from '../app/components/Hero/Hero';
import Stories from '../app/components/Stories/Stories';
import TrustedBy from '../app/components/TrustedBy/TrustedBy';

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<TrustedBy />
			<Features />
			<Content />
			<Stories />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
