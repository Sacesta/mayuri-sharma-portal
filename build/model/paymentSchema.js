import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";
;
const paymentSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    paymentId: {
        type: String,
        required: true,
        unique: true
    },
    planId: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true
    },
    purchasedDate: {
        type: Date,
        required: true
    }
});
paymentSchema.plugin(paginate);
const paymentmodel = mongoose.model('payment', paymentSchema);
export default paymentmodel;
//# sourceMappingURL=paymentSchema.js.map