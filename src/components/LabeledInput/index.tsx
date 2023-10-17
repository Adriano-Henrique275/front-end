import { InputHTMLAttributes } from 'react';
import * as S from './styles';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400'],
});

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	hasMarginTop?: boolean;
}

export const LabeledInput = ({
	label,
	hasMarginTop,
	...props
}: LabeledInputProps) => {
	return (
		<S.InputContainer $hasMarginTop={hasMarginTop} className={inter.className}>
			<S.Label htmlFor={props.id}>{label}</S.Label>
			<S.Input {...props} />
		</S.InputContainer>
	);
};
