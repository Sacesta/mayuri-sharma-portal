import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";
const subscriptionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    plans: {
        type: [Object],
    }
});
subscriptionSchema.plugin(paginate);
const subscriptionmodel = mongoose.model('subscription', subscriptionSchema);
export default subscriptionmodel;
//# sourceMappingURL=subscriptionSchema.js.map