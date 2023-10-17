'use client';

import styled from 'styled-components';

export const Form = styled.form`
	width: 80%;
	height: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ErrorContainer = styled.div`
	width: 100%;
	border-radius: 10px;
	margin-top: 20px;

	display: flex;
	justify-content: center;

	background-color: #dc3545;
	color: #ffffff;
	text-align: center;

	padding: 15px;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	margin-top: 50px;

	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		margin-top: 30px;
	}
`;
