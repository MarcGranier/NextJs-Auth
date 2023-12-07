import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			index: true,
			lowercase: true,
			unique: true,
			trim: true,
		},
		password: String,
		role: {
			type: String,
			default: 'user',
		},
		image: String,
		resetCode: {
			data: String,
			expiresAt: {
				type: Date,
				default: () => new Date(Date.now() + 10 * 60 * 1000), // 10 minutes in milliseconds
			},
		},
	},
	{ timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', userSchema);
