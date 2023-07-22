import express from 'express';
import * as controller from '../controller/userController.js';
import auth from '../middlewares/auth.js';
const router = express.Router();
//* Signup Login
router.route('/signup').post(controller.signup);
router.route('/login').get(controller.login);
//create appointment
//* get doctors
router.route('/get-user-info/:id').get(auth, controller.getUserInfo);
router.route('/doctors-by-department').get(auth, controller.getDoctorsbyDept);
//* Payment
router.route('/payment').post(auth, controller.addUserPayment);
router.route('/webhook').post(auth, controller.webHooks);
router.route('/get-payments/:id').get(auth, controller.getUserPayment);
router.route('/get-payment/:id').get(auth, controller.getPaymentById);
//* Appoinment
router.route('/appointment/cancel-appointment/:id').patch(auth, controller.cancelAppointment);
router.route('/check-available-timing').post(auth, controller.checkAvailableTiming);
router.route('/get-appointments/:id').get(auth, controller.getAppointment);
//* report / feedback
router.route('/report-doctor').post(auth, controller.reportDoctor);
router.route('/feedback').post(auth, controller.createFeedback);
//* update Profile
router.route('/update-profile/:id').patch(auth, controller.updateProfile);
// verify email
router.route('/verify').get(controller.verifyMail);
router.route('/forgot-password').post(controller.forgetPassword);
router.route('/reset-password').get(controller.resetPassword);
//plans
router.route('/purchased-plans').get(auth, controller.purchasedPlans);
export default router;
//# sourceMappingURL=user.js.map