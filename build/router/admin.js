import express from 'express';
import * as controller from '../controller/adminController.js';
const router = express.Router();
//* Login
router.route('/login').get(controller.login);
//* User Management
router.route('/users/get-all-users').get(controller.getAllUsers);
router.route('/users/delete-user/:id').delete(controller.deleteUserById);
router.route('/update-user/:id').post(controller.updateUserById);
//* Doctors Management
router.route('/doctors/add-doctors').post(controller.addDoctor);
router.route('/doctors/update-doctor/:id').post(controller.updaterDoctor);
router.route('/doctors/get-all-doctors').get(controller.getAllDoctors);
router.route('/doctors/get-doctor/:id').get(controller.getDoctorById);
router.route('/doctors/add-new-department').post(controller.addDepartment);
router.route('/doctors/delete-doctor/:id').delete(controller.deleteDoctor);
router.route('/get-doctors-assigned-by-admin').get(controller.getDoctorsAssignedByAdmin);
//* Blog Management
router.route('/blogs/add-blog').post(controller.addBlog);
router.route('/blogs/edit-blog/:id').get(controller.editBlog);
router.route('/blogs/get-single-blog/:id').get(controller.getSingleBlog);
router.route('/blogs/delete-blog/:id').delete(controller.deleteBlog);
//* report / feedback
router.route('/get-doctor-reports').get(controller.getDoctorReports);
router.route('/get-user-feedbacks').get(controller.getUserFeedbacks);
//* Payments Data
router.route('/get-payments').get(controller.getPaymentsList);
router.route('/get-payment-refunds').get(controller.getPaymentsRefundList);
//* analytics
router.route('/get-revenue').get(controller.getRevenue);
router.route('/get-total-appointments').get(controller.totalAppoinmtent);
router.route('/get-total-doctors').get(controller.getTotalDoctors);
router.route('/get-monthly-revenue').get(controller.getMonthlyRevenue);
//* Plans
router.route('/add-plan').post(controller.addPlans);
router.route('/delete-plan/:id').delete(controller.deletePlanById);
router.route('/create-subscription').post(controller.createOrUpdateSubscription);
// router.route('/add-plan-to-subscription').post(controller.addPlanToSubscription);
router.route('/delete-subscription-plan').delete(controller.deletePlanFromSubscription);
router.route('/delete-subscription/:id').delete(controller.deleteSubscriptionById);
// Coupon
router.route('/create-coupon').post(controller.createCoupon);
router.route('/delete-coupon/:id').delete(controller.deleteCouponById);
//Appointments
router.route('/get-appointments').get(controller.getAppointments);
router.route('/create-appointment').post(controller.createAppointment);
export default router;
//# sourceMappingURL=admin.js.map