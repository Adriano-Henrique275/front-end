'use client';

import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { LabeledInput } from '@/components/LabeledInput';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import * as S from './styles';

interface MonitorData {
	name: string;
	email: string;
	password: string;
	ra: string;
	image: string;
}

export default function Monitor() {
	const [monitorData, setMonitorData] = useState<MonitorData>({
		name: '',
		email: '',
		password: '',
		ra: '',
		image: '',
	});

	const handleAddMonitor = async () => {
		for (const key in monitorData) {
			if ((monitorData as any)[key] === '') {
				alert(
					`Você precisa preencher todos os campos antes de adicionar um monitor, campo '${key}' está faltando.`
				);
				return;
			}
		}

		console.log(monitorData);
	};

	const handleInputChange = (
		event: ChangeEvent<HTMLInputElement>,
		value?: string
	) => {
		setMonitorData({
			...monitorData,
			[event.target.name]: value ? value : event.target.value,
		});
	};

	return (
		<>
			<S.Container>
				<S.FormContainer>
					<S.FormSection>
						<LabeledInput
							id='name'
							label='Nome completo'
							name='name'
							maxLength={50}
							placeholder='Adriano Henrique'
							type='text'
							value={monitorData.name}
							onChange={handleInputChange}
						/>
						<LabeledInput
							id='email'
							label='E-mail'
							name='email'
							placeholder='email@email.com'
							type='email'
							value={monitorData.email}
							onChange={handleInputChange}
						/>
					</S.FormSection>
					<S.FormSection>
						<LabeledInput
							id='password'
							label='Senha'
							name='password'
							placeholder='senha123'
							type='text'
							value={monitorData.password}
							onChange={handleInputChange}
						/>
						<LabeledInput
							id='ra'
							label='R.A'
							name='ra'
							placeholder='Exemplo R.A'
							type='text'
							value={monitorData.ra}
							onChange={handleInputChange}
						/>
					</S.FormSection>
				</S.FormContainer>
				<S.ImageContainer>
					<S.ImagePreviewContainer>
						<S.ImagePreview>
							{monitorData.image && (
								<Image
									src={monitorData.image}
									alt='Monitor picture'
									width={150}
									height={150}
								/>
							)}
						</S.ImagePreview>

						<p>{monitorData.name}</p>
					</S.ImagePreviewContainer>
					<label htmlFor='image'>
						<FiCamera /> Adicionar foto
					</label>
					<input
						type='file'
						id='image'
						name='image'
						accept='images/*'
						style={{ display: 'none' }}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							if (event?.target?.files?.[0]) {
								const file = event.target.files[0];
								const reader = new FileReader();
								reader.onloadend = () => {
									handleInputChange(event, reader.result as string);
								};
								reader.readAsDataURL(file);
							}
						}}
					/>
				</S.ImageContainer>
			</S.Container>

			<Footer>
				<Button title='Adicionar' type='button' onClick={handleAddMonitor} />
				<Button title='Sair' />
			</Footer>
		</>
	);
}
