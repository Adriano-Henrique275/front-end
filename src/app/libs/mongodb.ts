import mongoose from 'mongoose';

const { NEXT_PUBLIC_MONGODB_URI } = process.env;

if (!NEXT_PUBLIC_MONGODB_URI) {
	console.log('URL : ' + NEXT_PUBLIC_MONGODB_URI);
	throw new Error('NEXT_PUBLIC_MONGODB_URI deveria estar definido !');
}

console.log(NEXT_PUBLIC_MONGODB_URI);

export const connectDB = async () => {
	try {
		const { connection } = await mongoose.connect(NEXT_PUBLIC_MONGODB_URI);
		console.log(connection);
		if (connection.readyState === 1) {
			return Promise.resolve(true);
		}
	} catch (error) {
		return Promise.reject(false);
	}
};
