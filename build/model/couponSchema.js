import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";
;
const couponSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    discount: {
        type: String,
        required: true,
        unique: true
    },
    discountType: {
        type: String,
        required: true
    }
});
couponSchema.plugin(paginate);
const couponmodel = mongoose.model('coupon', couponSchema);
export default couponmodel;
//# sourceMappingURL=couponSchema.js.map