import { BLOG, COUPON, DEPARTMENT, DOCTOR, PLAN, SUBSCRIPTION } from '../model/index.js';
//* Get-all-blogs
export const getAllBlogs = async (req, res) => {
    try {
        const { page } = req.query;
        const options = {
            page: Number(page) || 1,
            limit: 12,
        };
        const data = await BLOG.paginate({}, options);
        res.status(200).send({ success: true, message: 'get all blog successfull', data });
    }
    catch (error) {
        console.log('Error in common controller: Get-All-blogs :-', error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
};
export const getDoctorsBycity = async (req, res) => {
    try {
        const city = req.query.name;
        // console.log(city);
        const doctors = await DOCTOR.find({ city });
        // console.log(doctors);
        return res.status(200).send({ success: true, message: 'Get doctors by city successful', data: doctors });
    }
    catch (error) {
        // console.log('Error in common contoller - Get-all-doctors :-', error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};
export const getAllDoctors = async (req, res) => {
    try {
        // const { page } = req.query;
        // const options: Ioptions = {
        //   page: Number(page) || 1,
        //   limit: 12,
        // };
        const data = await DOCTOR.find({});
        return res.status(200).send({ success: true, message: 'get all Doctors Successful', data });
    }
    catch (error) {
        console.log('Error in common contoller - Get-all-doctors :-', error);
        return res.status(500).send({ success: true, message: 'Internal Server Error' });
    }
};
export const getDepartments = async (req, res) => {
    try {
        const department = await DEPARTMENT.find({});
        return res.status(200).send({ success: true, message: 'get department successful', data: department });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: true, message: 'Internal Server Error' });
    }
};
export const searchDoctors = async (req, res) => {
    try {
        const { keyword } = req.query;
        const regex = new RegExp(keyword.toString(), 'i');
        const result = await DOCTOR.find({ firstName: { $regex: regex } });
        return res.status(200).send({ success: true, message: 'search doctor successful', result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: true, message: 'Internal Server Error' });
    }
};
export const getPlans = async (req, res) => {
    const plans = await PLAN.find({});
    if (plans) {
        res
            .status(200)
            .send({ success: true, message: "here are your plans", plans });
    }
    else
        res.status(200).send({ success: false, message: "NO plans exist" });
};
export const getPlanById = async (req, res) => {
    const planId = req.params.id;
    const plan = await PLAN.findOne({ _id: planId });
    res.status(200).send({ success: true, message: "here is your plan", plan });
};
export const getCoupon = async (req, res) => {
    const coupons = await COUPON.find({});
    if (coupons) {
        res
            .status(200)
            .send({ success: true, message: "here are coupons", coupons });
    }
    else
        res.status(200).send({ success: false, message: "NO coupon exist" });
};
export const getCouponById = async (req, res) => {
    const couponId = req.params.id;
    const coupon = await COUPON.findOne({ _id: couponId });
    if (coupon) {
        res.status(200).send({ success: true, message: "here is your coupon", coupon });
    }
    else {
        res.status(400).send({ success: true, message: "coupon not found", coupon });
    }
};
export const getSubscriptions = async (req, res) => {
    try {
        // Find all subscriptions
        const subscriptions = await SUBSCRIPTION.find({});
        res.status(200).send({
            success: true,
            message: "Subscriptions retrieved successfully",
            data: subscriptions,
        });
    }
    catch (error) {
        console.error("Error fetching subscriptions:", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
export const getSubscriptionById = async (req, res) => {
    try {
        const subscriptionId = req.params.id;
        // Find the subscription by ID
        const subscription = await SUBSCRIPTION.findById(subscriptionId);
        if (!subscription) {
            return res.status(404).send({ success: false, message: "Subscription not found" });
        }
        res.status(200).send({
            success: true,
            message: "Subscription retrieved successfully",
            data: subscription,
        });
    }
    catch (error) {
        console.error("Error fetching subscription:", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
//# sourceMappingURL=controllers.js.map