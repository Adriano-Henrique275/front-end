'use client';

import styled from 'styled-components';

export const TableContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0px 40px;

	> div:nth-child(1) {
		height: calc(100vh - 325px);
	}
`;
