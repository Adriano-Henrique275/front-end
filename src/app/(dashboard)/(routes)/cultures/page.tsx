'use client';

import { Button } from '@/components/Button';
import { DefaultTable } from '@/components/DefaultTable';
import { Footer } from '@/components/Footer';
import * as S from './styles';

export default function Cultures() {
	return (
		<>
			<S.TableContainer>
				<DefaultTable />
			</S.TableContainer>

			<Footer>
				<Button title='Sair' />
			</Footer>
		</>
	);
}
