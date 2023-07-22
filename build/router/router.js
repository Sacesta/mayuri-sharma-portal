import express from 'express';
import * as controller from '../controller/controllers.js';
const router = express.Router();
//* blogs
router.route('/blogs/get-all-blogs').get(controller.getAllBlogs);
router.route('/get-department').get(controller.getDepartments);
router.route('/get-doctors').get(controller.getAllDoctors);
router.route('/get-doctors-by-city').get(controller.getDoctorsBycity);
router.route('/search-doctors').get(controller.searchDoctors);
//plans
router.route('/get-plans').get(controller.getPlans);
router.route('/get-plans/:id').get(controller.getPlanById);
//coupons
router.route('/get-coupons').get(controller.getCoupon);
router.route('/get-coupon/:id').get(controller.getCouponById);
//subscriptions
router.route('/get-subscriptions').get(controller.getSubscriptions);
router.route('/get-subscriptions/:id').get(controller.getSubscriptionById);
export default router;
//# sourceMappingURL=router.js.map