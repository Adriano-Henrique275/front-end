import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { FaHome } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import * as S from './styles';
import { SubHeader } from '@/components/SubHeader';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<SubHeader />
			<Sidebar.Root>
				<Sidebar.Item icon={FaHome} title='Home' href='/home' />
				<Sidebar.Item
					icon={FaTools}
					title='Adicionar monitor'
					href='/monitor'
				/>
				<Sidebar.Item
					icon={IoMdSettings}
					title='Configurações'
					href='/config'
				/>
			</Sidebar.Root>
			<S.Container>{children}</S.Container>
		</>
	);
}
