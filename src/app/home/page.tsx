import * as S from './styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['500'],
});

function HomePage() {
	return (
		<S.Container className={roboto.className}>
			<div >Home</div>
		</S.Container>
	);
}

export default HomePage;
