import FibLogo from '../../../public/fib.png';
import * as S from './styles';
import { Roboto } from 'next/font/google';
import { LoginForm } from '@/components/LoginForm';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['500'],
});

function LoginPage() {
	return (
		<S.Container className={roboto.className}>
			<S.LogoContainer>
				<S.Logo src={FibLogo} alt='FibLogo' />
				<S.Title>
					<S.ColoredText $color='#FD9407'>Fib</S.ColoredText> Agro Tech
				</S.Title>
				<S.SubTitle>Seja bem vindo</S.SubTitle>
			</S.LogoContainer>
			<S.FormContainer>
				<S.FormTitle>Login</S.FormTitle>
				<LoginForm />
			</S.FormContainer>
		</S.Container>
	);
}

export default LoginPage;
