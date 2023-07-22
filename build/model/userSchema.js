/* eslint-disable linebreak-style */
import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileURL: {
        type: String,
    },
    doctors: {
        type: [String],
    },
    token: {
        type: String,
        default: '',
    },
    isVerified: {
        type: Boolean,
    },
    plans: {
        type: String,
    },
});
userSchema.plugin(paginate);
const userModel = mongoose.model('user', userSchema);
export default userModel;
//# sourceMappingURL=userSchema.js.map