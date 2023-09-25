'use client';

import styled from 'styled-components';

export const UpperBox = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	padding: 5px 20px;

	@media (max-width: 768px) {
		justify-content: flex-end;
	}
`;

export const Title = styled.h3`
	color: #5505ff;
	font-size: 26px;
	font-weight: 700;
	line-height: normal;

	@media (max-width: 768px) {
		font-size: 22px;
	}
`;

export const ColoredText = styled.span<{ $color?: string }>`
	color: ${(props) => props.$color};
`;

export const LowBox = styled.div`
	width: 100%;
	height: 65px;
	position: relative;

	background: linear-gradient(
		180deg,
		rgba(253, 148, 7, 0.69) 27.1%,
		rgba(21, 95, 205, 0.3) 78.05%,
		rgba(21, 95, 205, 0.3) 81.08%
	);
`;

export const LogoContainer = styled.div`
	position: absolute;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	top: -15px;
	text-align: center;

	@media (max-width: 768px) {
		left: 15px;
		right: auto;
		top: calc(50% - 68px);
	}

	> img {
		width: 100%;
		height: auto;
		max-width: 94px;

		@media (max-width: 768px) {
			max-width: 74px;
		}
	}
`;

export const UserContainer = styled.div`
	display: none;
	visibility: hidden;

	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;

	@media (max-width: 768px) {
		display: unset;
		visibility: visible;
	}
`;
