import mongoose, { Schema } from 'mongoose';
const conversationSchema = new Schema({
    members: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
});
const conversationModel = mongoose.model('conversation', conversationSchema);
export default conversationModel;
//# sourceMappingURL=conversationSchema.js.map