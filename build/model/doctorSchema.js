/* eslint-disable linebreak-style */
import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const doctorSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
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
    experience: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        requied: true,
    },
    photoURL: {
        type: String,
        required: true,
    },
    timeSlots: {
        type: [Object],
        required: true,
    },
    leave: {
        type: [String],
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    subcategory: {
        type: String,
    },
});
doctorSchema.plugin(paginate);
const doctorModel = mongoose.model('Doctor', doctorSchema);
export default doctorModel;
//# sourceMappingURL=doctorSchema.js.map