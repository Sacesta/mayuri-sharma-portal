import express from 'express';
import * as controller from '../controller/doctorController.js';
import auth from '../middlewares/auth.js';
const router = express.Router();
//* login
router.route('/login').get(controller.login);
//* appointments
router.route('/appointment/get-appointments').get(auth, controller.getAppointments);
router.route('/appointment/cancel-appointment/:id').patch(controller.cancelAppointment);
router.route('/appointment/get-appointments/:id').get(auth, controller.getAppointmentsByUserId);
router.route('/add-free-time-slots').post(auth, controller.addFreeTimeSlots);
router.route('/appointment/summary').get(auth, controller.getDoctorAppointments);
router.route('/appointment/end-meeting').post(auth, controller.endMeeting);
//* get data
router.route('/get-doctor/:id').get(controller.getDoctor);
router.route('/edit-doctor/:id').patch(controller.editDoctor);
router.route('/patients/:id').get(controller.getPatients);
//* Add Prescription
router.route('/add-prescription').post(controller.addPrescription);
//* apply for Leave
router.route('/apply-leave').patch(controller.applyLeave);
router.route('/cancel-leave').patch(controller.cancelLeave);
//* analytics
router.route('/get-total-revenue/:id').get(controller.getTotalRevenue);
router.route('/get-monthly-revenue/:id').get(controller.getMontlyRevenue);
export default router;
//# sourceMappingURL=doctor.js.map