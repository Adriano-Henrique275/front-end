import { ReactNode } from 'react';
import * as S from './styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['500'],
});

interface SidebarRootProps {
	children: ReactNode;
}

export function SidebarRoot({ children }: SidebarRootProps) {
	return (
		<S.SidebarContainer className={roboto.className}>
			{children}
		</S.SidebarContainer>
	);
}
