/* eslint-disable linebreak-style */
import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const appointmentSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    consultation_type: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    doctorId: {
        type: String,
        required: true,
    },
    cancelled: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
    screenshotURL: {
        type: String,
    }
});
appointmentSchema.plugin(paginate);
const appointmentModel = mongoose.model('appointment', appointmentSchema);
export default appointmentModel;
//# sourceMappingURL=appointmentSchema.js.map