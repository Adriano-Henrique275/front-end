import Image from 'next/image';
import DefaultUserImage from '../../../public/defaultUser.svg';
import * as S from './styles';

interface UserProps {
	picture?: string;
	name: string;
}

export const User = ({ name, picture }: UserProps) => {
	return (
		<S.Container>
			<S.PictureContainer>
				<Image src={picture || DefaultUserImage} alt='User Picture' />
			</S.PictureContainer>
			<S.Username>{name}</S.Username>
		</S.Container>
	);
};
