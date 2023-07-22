/* eslint-disable linebreak-style */
import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
});
blogSchema.plugin(paginate);
const blogModel = mongoose.model('Blog', blogSchema);
export default blogModel;
//# sourceMappingURL=blogSchema.js.map