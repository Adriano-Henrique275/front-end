'use client';

import styled from 'styled-components';
import { User } from '../User';

export const SubHeaderContainer = styled.div`
	width: 100%;
	height: 100px;

	display: flex;
	align-items: center;
	justify-content: space-around;

	padding-bottom: 15px;
`;

export const Path = styled.h6`
	color: #fd9407;
	font-size: 24px;
	font-weight: 400;
	line-height: normal;
`;

export const UserComponentContainer = styled.div`
	display: block;

	@media (max-width: 768px) {
		display: none;
	}
`;
