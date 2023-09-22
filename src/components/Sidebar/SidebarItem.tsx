import { ElementType } from 'react';
import * as S from './styles';
import Link from 'next/link';

interface SidebarItemProps {
	icon: ElementType;
	title: string;
	href: string;
}

export function SidebarItem({ icon: Icon, title, href }: SidebarItemProps) {
	return (
		<S.ItemLink href={href}>
			<S.Item>
				<Icon />
				<S.ItemTitle>{title}</S.ItemTitle>
			</S.Item>
		</S.ItemLink>
	);
}
