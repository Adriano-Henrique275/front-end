'use client';

import styled from 'styled-components';

export const Container = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PictureContainer = styled.div`
	border-radius: 50%;
	width: 60px;
	height: 60px;
	overflow: hidden;
	margin-bottom: 3px;

	@media (max-width: 768px) {
		width: 45px;
		height: 45px;
		margin-bottom: 0px;
	}

	> img {
		width: 100%;
		position: relative;
		height: 100%;
	}
`;

export const Username = styled.p`
	color: #1c1818;

	font-size: 18px;
	font-weight: 500;
	line-height: normal;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;
