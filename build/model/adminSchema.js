import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
adminSchema.plugin(paginate);
const adminModel = mongoose.model('admin', adminSchema);
export default adminModel;
//# sourceMappingURL=adminSchema.js.map