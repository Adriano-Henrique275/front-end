'use client';

import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ $hasMarginTop?: boolean }>`
	width: 100%;

	display: flex;
	flex-direction: column;

	${(props) =>
		props.$hasMarginTop &&
		css`
			margin-top: 15px;

			@media (max-width: 768px) {
				margin-top: 10px;
			}
		`}
`;

export const Label = styled.label`
	margin: 10px;

	color: #9d9e94;
	font-size: 20px;
	font-weight: 400;
	line-height: normal;

	@media (max-width: 768px) {
		font-size: 16px;
		margin: 5px;
	}
`;

export const Input = styled.input`
	width: 100%;

	border-radius: 8px;
	background-color: #d9d9d9;

	color: #9d9e94;
	font-size: 19px;
	font-weight: 400;
	line-height: normal;

	outline: none;
	border: 1px solid transparent;

	padding: 18px 15px;

	&:placeholder {
		color: #9d9e94;
	}

	&:focus {
		border: 1px solid #218ab7;
	}

	@media (max-width: 768px) {
		font-size: 17px;
		padding: 12px 11px;
	}
`;
