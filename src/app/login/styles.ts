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

export const LogoContainer = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 60px;

	@media (max-width: 768px) {
		gap: 20px;

		padding: 20px 0px;
	}
`;

export const Logo = styled(Image)`
	object-fit: cover;
	width: 100%;
	height: auto;
	max-width: 200px;

	@media (max-width: 768px) {
		max-width: 120px;
	}
`;

export const Title = styled.h1`
	color: #5505ff;
	font-size: 40px;
	font-weight: 700;
	line-height: normal;

	@media (max-width: 768px) {
		font-size: 30px;
	}
`;

export const ColoredText = styled.span<{ $color?: string }>`
	color: ${(props) => props.$color};
`;

export const SubTitle = styled.h4`
	color: #1c1818;
	font-size: 32px;
	font-weight: 500;
	line-height: normal;

	@media (max-width: 768px) {
		font-size: 22px;
	}
`;

export const FormContainer = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 70px;

	width: 420px;
	height: 100%;
	background: linear-gradient(
		195deg,
		rgba(253, 148, 7, 0.69) 37.1%,
		rgba(21, 95, 205, 0.3) 78.05%,
		rgba(21, 95, 205, 0.3) 81.08%
	);

	@media (max-width: 768px) {
		width: 100%;
		gap: 20px;

		padding: 20px 0px;
	}
`;

export const FormTitle = styled.h2`
	color: #000000;
	font-size: 40px;
	font-weight: 500;
	line-height: normal;

	@media (max-width: 768px) {
		font-size: 30px;
	}
`;
