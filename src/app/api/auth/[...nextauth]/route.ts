import { connectDB } from '@/app/libs/mongodb';
import User from '@/models/User';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'email@email.com',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: '*******',
				},
			},
			async authorize(credentials, req) {
				await connectDB();

				const userFound = await User.findOne({
					email: credentials?.email,
				}).select('+password');

				console.log(userFound);

				if (!userFound) {
					throw new Error('Credenciais inválidas');
				}

				//O comentario é para ele comparar senhas encriptadas.
				/* const passwordMatch = await bcrypt.compare(
					credentials!.password,
					userFound.password
				); */

				if (credentials!.password !== userFound.password) {
					throw new Error('Credenciais inválidas');
				}

				return userFound;
			},
		}),
	],
	callbacks: {
		jwt({ account, token, user, profile, session }) {
			if (user) token.user = user;
			return token;
		},
		session({ session, token }) {
			session.user = token.user as any;
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
});
export { handler as GET, handler as POST };
