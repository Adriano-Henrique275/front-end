'use client';

import { FormEvent, useState } from 'react';
import { Button } from '../Button';
import { LabeledInput } from '../LabeledInput';
import * as S from './styles';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const res = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		});

		if (res?.error) {
			return setError(res.error as string);
		}

		if (res?.ok) return router.push('/home');
	};

	return (
		<S.Form onSubmit={handleSubmit}>
			<LabeledInput
				id='email'
				label='E-mail'
				name='email'
				placeholder='email@email.com'
				type='email'
			/>

			<LabeledInput
				id='senha'
				label='Senha'
				name='senha'
				placeholder='********'
				type='password'
				hasMarginTop={true}
			/>

			{error && <S.ErrorContainer>{error}</S.ErrorContainer>}

			<S.ButtonContainer>
				<Button title='Entrar' type='submit' />
			</S.ButtonContainer>
		</S.Form>
	);
};
