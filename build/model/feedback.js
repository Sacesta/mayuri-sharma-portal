import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const feedbackSchema = new Schema({
    doctorId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    feedback: {
        type: String,
    },
});
feedbackSchema.plugin(paginate);
const feedbackModel = mongoose.model('Feedback', feedbackSchema);
export default feedbackModel;
//# sourceMappingURL=feedback.js.map