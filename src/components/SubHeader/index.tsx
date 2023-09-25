'use client';

import { usePathname } from 'next/navigation';
import * as S from './styles';
import { User } from '../User';

export const SubHeader = () => {
	const pathname = usePathname();

	const pathnameAssociations: { [key: string]: string } = {
		'/cultures': 'Filtros',
	};

	return (
		<S.SubHeaderContainer>
			<S.Path>{pathnameAssociations[pathname] || ''}</S.Path>
			<S.UserComponentContainer>
				<User name='Professora Admin' />
			</S.UserComponentContainer>
		</S.SubHeaderContainer>
	);
};
