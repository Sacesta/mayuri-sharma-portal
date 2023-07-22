import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const departmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});
departmentSchema.plugin(paginate);
const departmentModel = mongoose.model('department', departmentSchema);
export default departmentModel;
//# sourceMappingURL=departmentSchema.js.map