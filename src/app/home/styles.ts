'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	width: 100%;
	height: 100vh;

	background-color: #ffffff;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;