'use client';

import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 20px 40px;
	gap: 15px;

	height: calc(100vh - 325px);

	overflow-y: auto;

	@media (max-width: 768px) {
		height: auto;
		padding: 10px 40px;
	}

	@media (max-width: 500px) {
		flex-direction: column-reverse;
		gap: 20px;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 5px;
	}
`;

export const FormSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	label {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;

		cursor: pointer;

		color: #9d9e94;
		font-size: 16px;
		font-weight: 500;
		line-height: normal;
		text-align: center;

		svg {
			font-size: 30px;
		}
	}
`;

export const ImagePreviewContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		color: #9d9e94;
		font-size: 16px;
		font-weight: 500;
		line-height: normal;
		max-width: 150px;
		word-break: break-all;
		text-align: center;
	}
`;

export const ImagePreview = styled.div`
	background-color: #9d9e94;
	width: 120px;
	height: 120px;

	border-radius: 50%;

	overflow: hidden;
`;
