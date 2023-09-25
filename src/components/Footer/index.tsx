import { ReactNode } from 'react';
import * as S from './styles';

interface FooterProps {
	children?: ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
	return <S.FooterContainer>{children}</S.FooterContainer>;
};
