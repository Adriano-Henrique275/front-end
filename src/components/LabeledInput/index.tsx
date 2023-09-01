import { HTMLInputTypeAttribute } from 'react';
import * as S from './styles';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400'],
});

interface LabeledInputProps {
	label: string;
	type?: HTMLInputTypeAttribute;
	id: string;
	name: string;
	placeholder: string;
	hasMarginTop?: boolean;
}

export const LabeledInput = ({
	label,
	type,
	id,
	placeholder,
	name,
	hasMarginTop,
}: LabeledInputProps) => {
	return (
		<S.InputContainer $hasMarginTop={hasMarginTop} className={inter.className}>
			<S.Label htmlFor={id}>{label}</S.Label>
			<S.Input
				type={type || 'text'}
				id={id}
				name={name}
				placeholder={placeholder}
			/>
		</S.InputContainer>
	);
};
