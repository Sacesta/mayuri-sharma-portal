/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";
const planSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    number_of_expiration_day: {
        type: Number,
        required: true
    },
    maximum_image: {
        type: Number,
        required: true
    },
    online_consulting: {
        type: Boolean,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    monthly_max_appointment: {
        type: Number,
        required: true
    },
    message_system_with_patient: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        required: true
    },
    doctors: {
        type: [String],
        required: true
    }
});
planSchema.plugin(paginate);
const planmodel = mongoose.model('plan', planSchema);
export default planmodel;
//# sourceMappingURL=planSchema.js.map