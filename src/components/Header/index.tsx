import FibLogo from '../../../public/fib.png';
import * as S from './styles';
import Image from 'next/image';
import { Roboto } from 'next/font/google';
import { User } from '../User';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['500'],
});

export const Header = () => {
	return (
		<div className={roboto.className} style={{ height: '125px' }}>
			<S.UpperBox>
				<S.Title>
					<S.ColoredText $color='#FD9407'>Fib</S.ColoredText> Agro Tech
				</S.Title>
			</S.UpperBox>
			<S.LowBox>
				<S.LogoContainer>
					<Image src={FibLogo} alt='Fib Logo' />
				</S.LogoContainer>
				<S.UserContainer>
					<User name='Professora Admin' />
				</S.UserContainer>
			</S.LowBox>
		</div>
	);
};
