import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
}

export const Button = ({ title, ...props }: ButtonProps) => {
	return <S.Button {...props}>{title}</S.Button>;
};
