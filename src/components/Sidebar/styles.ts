'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
	position: fixed;
	z-index: 1;
	height: calc(100vh - 240px);
	width: 180px;
	display: flex;
	flex-direction: column;
	gap: 30px;

	background-color: #ffffff;

	align-items: center;
	justify-content: center;

	overflow-y: auto;

	@media (max-width: 768px) {
		bottom: 0px;
		left: 0px;
		height: 70px;
		width: 100%;
		flex-direction: row;
	}
`;

export const ItemLink = styled(Link)`
	width: 100%;
`;

export const Item = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-right: 3px solid transparent;
	border-top-right-radius: 12px;
	border-bottom-right-radius: 12px;
	transition: border-right-color 0.5s ease-out;

	> svg {
		width: 60px;
		height: 60px;

		@media (max-width: 768px) {
			width: 36x;
			height: 36px;
		}
	}

	@media (hover: hover) {
		cursor: pointer;

		@media (min-width: 768px) {
			&:hover {
				border-right-color: #1c1818;
			}
		}
	}
`;

export const ItemTitle = styled.span`
	color: #1c1818;
	font-size: 18px;
	font-weight: 500;
	line-height: normal;
	text-align: center;
	max-width: 80%;

	margin-top: 10px;

	@media (max-width: 768px) {
		display: none;
	}
`;
