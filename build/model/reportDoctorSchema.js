import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const reportDoctorSchema = new Schema({
    doctorId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
});
reportDoctorSchema.plugin(paginate);
const reportDoctorModel = mongoose.model('ReportDoctor', reportDoctorSchema);
export default reportDoctorModel;
//# sourceMappingURL=reportDoctorSchema.js.map