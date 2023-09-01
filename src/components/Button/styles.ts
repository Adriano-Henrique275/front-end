'use client';

import styled from 'styled-components';

export const Button = styled.button`
	background-color: #218ab7;

	width: 100%;
	max-width: 200px;

	padding: 15px 30px;

	border-radius: 25px;

	color: #ffffff;
	font-size: 25px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	border: 1px solid transparent;
	outline: none;

	cursor: pointer;

	transition: filter 1s ease;

	&:hover {
		filter: brightness(1.2);
	}

	&:focus {
		border: 1px solid #fd9407;
	}

	@media (max-width: 768px) {
		font-size: 20px;

		padding: 10px 20px;
	}
`;
