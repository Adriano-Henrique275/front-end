'use client';

import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface Props {
	children: React.ReactNode;
}

function Providers({ children }: Props) {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute='class' defaultTheme='light'>
				<SessionProvider>{children}</SessionProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export default Providers;
