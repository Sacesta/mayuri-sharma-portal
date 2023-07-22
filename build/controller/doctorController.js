import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Stripe from 'stripe';
import mongoose from 'mongoose';
import { APPOINTMENT, BLOG, DOCTOR, USER } from '../model/index.js';
const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: '2022-11-15',
});
export const login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const doctor = await DOCTOR.findOne({ email });
        if (!doctor) {
            return res.status(200).send({ success: false, message: 'Doctor does not exist' });
        }
        const match = await bcrypt.compare(password, doctor.password);
        if (match) {
            // Credential verified
            // Creating a JWT token
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, {
                expiresIn: '10d',
            });
            doctor.password = null;
            return res.status(200).send({
                success: true,
                message: 'Doctor login successfull',
                doctor,
                token,
            });
        }
        return res.status(200).send({ success: false, message: 'Wrong Password' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: 'Internal server error' });
    }
};
//* add-blog
export const addBlog = async (req, res) => {
    try {
        const blogData = {
            title: req.body.title,
            content: req.body.content,
            imageURL: req.body.imageURL,
        };
        const blog = new BLOG(blogData);
        await blog.save();
        return res.status(200).send({ success: true, message: 'Blog adding successfull' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: 'Internal server error' });
    }
};
//* get-appointment
export const getAppointments = async (req, res) => {
    try {
        const data = await APPOINTMENT.find({ doctorId: req.user.id });
        return res.status(200).send({ success: true, message: 'Get Appointments Successful', data });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: 'Internal server error' });
    }
};
export const getAppointmentsByUserId = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await APPOINTMENT.find({ doctorId: req.user.id, userId: id });
        return res.status(200).send({ success: true, message: 'Get Appointments Successful', data });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: 'Internal server error' });
    }
};
//* cancel-appointment
export const cancelAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await APPOINTMENT.findOne({ _id: id });
        if (!appointment)
            return res.status(404).send({ success: false, message: 'Appointment not found' });
        await stripe.refunds.create({
            payment_intent: appointment.payment_intent,
        });
        await APPOINTMENT.updateOne({ _id: id }, { cancelled: true, active: false });
        return res.status(200).send({ success: true, message: 'Appointment cancelled successfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};
//* get Doctor
export const getDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await DOCTOR.find({ _id: id });
        return res.status(200).send({ success: true, message: 'get doctor Successful', doctor });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: 'Internal server error' });
    }
};
//* edit doctor
export const editDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        //* Destructuring Data from request body
        const { firstName, fees, workTime, lastName, email, phone, address, department, dob, profile, photoURL, } = req.body;
        const doctor = {
            firstName,
            lastName,
            email,
            phone,
            address,
            profile,
            department,
            dob,
            fees,
            workTime,
            photoURL,
        };
        //  Updating Doctor Profile
        const result = await DOCTOR.updateOne({ email }, doctor);
        console.log(result);
        return res.status(200).json({ success: true, message: 'Doctor profile edited succesfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'internal server error' });
    }
};
//* Get-All-Doctors
export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await DOCTOR.find({});
        res.status(200).send({ success: true, message: 'get All doctors succesfull', data: doctors });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
};
//* get Patients Stat
export const getPatients = async (req, res) => {
    try {
        const id = req.params?.id;
        const patients = await APPOINTMENT.aggregate([
            {
                $group: {
                    _id: '$doctorId',
                    male: {
                        $sum: {
                            $cond: [{ $eq: ['$gender', 'male'] }, 1, 0],
                        },
                    },
                    female: {
                        $sum: {
                            $cond: [{ $eq: ['$gender', 'female'] }, 1, 0],
                        },
                    },
                    total: { $sum: 1 },
                },
            },
            {
                $project: {
                    _id: 0,
                    doctorId: '$_id',
                    male: 1,
                    female: 1,
                    total: 1,
                },
            },
        ]);
        res.status(200).send({ success: true, message: 'get patients successful', patients });
    }
    catch (error) {
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};
//* get total revenue
export const getTotalRevenue = async (req, res) => {
    try {
        const id = req.params?.id;
        const revenue = await APPOINTMENT.aggregate([
            {
                $group: {
                    _id: null,
                    totalPrice: { $sum: { $toInt: '$price' } },
                },
            },
        ]);
        res.status(200).send({ success: true, message: 'get revenue successful', revenue: revenue[0].totalPrice });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
};
//* Apply Leave
export const applyLeave = async (req, res) => {
    try {
        const { leaveDate, doctorId } = req.body;
        const doctor = await DOCTOR.findOne({ _id: doctorId });
        if (!doctor)
            return res.status(404).send({ success: false, message: 'user not found' });
        if (doctor?.leave?.includes(leaveDate)) {
            return res.status(200).json({ success: false, message: 'Leave Already Applied on the Same Date' });
        }
        await DOCTOR.updateOne({ _id: doctorId }, { $push: { leave: leaveDate } });
        return res.status(200).send({ success: true, message: 'Leave Applied Successfully' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};
//* Apply Leave
export const cancelLeave = async (req, res) => {
    try {
        const { leaveDate, doctorId } = req.body;
        const doctor = await DOCTOR.findOne({ _id: doctorId });
        if (!doctor)
            return res.status(404).send({ success: false, message: 'user not found' });
        if (doctor?.leave?.includes(leaveDate) === false) {
            return res.status(200).json({ success: false, message: 'No Leave on the Same Date' });
        }
        const date = doctor.leave.filter((data) => data !== leaveDate);
        await DOCTOR.updateOne({ _id: doctorId }, { leave: date });
        const result = await DOCTOR.findOne({ _id: doctorId });
        return res.status(200).send({ success: true, message: 'Leave Cancelled Successfully', result: result.leave });
    }
    catch (error) {
        console.log('Error in doctor:: cancel leave :- ', error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};
//* Add Prescription
export const addPrescription = async (req, res) => {
    try {
        const { id, medicine, dosage, notes, doctor, date } = req.body;
        const user = await USER.findOne({ _id: new mongoose.Types.ObjectId(id) });
        if (!user)
            return res.status(404).send({ success: false, message: 'Prescription not found with id' });
        user.prescription.push({
            id: user.prescription.length + 1,
            medicine,
            dosage,
            notes,
            doctor,
            date,
        });
        await user.save();
        return res.status(200).send({ success: true, message: 'Prescription added Successfully' });
    }
    catch (error) {
        console.error('Error in doctor: add prescription :-', error);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};
//* get monthly revenue
export const getMontlyRevenue = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await APPOINTMENT.aggregate([
            {
                $group: {
                    _id: {
                        month: { $month: { $toDate: '$date' } },
                        year: { $year: { $toDate: '$date' } },
                    },
                    revenue: { $sum: { $toDouble: '$price' } },
                },
            },
            {
                $sort: {
                    '_id.year': 1,
                    '_id.month': 1,
                },
            },
        ]);
        const monthlyRevenueArray = Array(12).fill(0);
        result.forEach((item) => {
            const monthIndex = item._id.month - 1;
            monthlyRevenueArray[monthIndex] = item.revenue;
        });
        res.status(200).send({ success: true, message: 'get Revenue Successfull', data: result });
    }
    catch (error) {
        console.log('error in get monthly revenue', error);
        res.status(500).json({ error: 'Unable to retrieve the data' });
    }
};
// add free time slots for appointments
export const addFreeTimeSlots = async (req, res) => {
    try {
        const { date, startTime, endTime } = req.body;
        const doctor = await DOCTOR.findById(req.user.id);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }
        // In this example, I'm using a simple date format (YYYY-MM-DD)
        if (!isValidDate(date)) {
            return res.status(400).json({ error: 'Invalid date format' });
        }
        if (hasTimeSlotOverlap(doctor.timeSlots, date, startTime, endTime)) {
            return res.status(400).json({ error: 'Time slots overlap with existing slots' });
        }
        doctor.timeSlots.push({ date, startTime, endTime });
        await doctor.save();
        return res.status(200).json({ message: 'Free time slots added successfully' });
    }
    catch (err) {
        console.error('Error in addFreeTimeSlots controller:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
// Helper function to check for time slot overlap
function hasTimeSlotOverlap(timeSlots, newDate, newStartTime, newEndTime) {
    return timeSlots.some(slot => {
        const slotDate = slot.date;
        const slotStartTime = slot.startTime;
        const slotEndTime = slot.endTime;
        return (slotDate === newDate &&
            ((newStartTime >= slotStartTime && newStartTime < slotEndTime) ||
                (newEndTime > slotStartTime && newEndTime <= slotEndTime) ||
                (newStartTime <= slotStartTime && newEndTime >= slotEndTime)));
    });
}
// Helper function to validate the date format (YYYY-MM-DD)
function isValidDate(date) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
}
export const getDoctorAppointments = async (req, res) => {
    try {
        // Get the doctor's ID from the authenticated user's request
        const doctorId = req.user.id;
        // Fetch the doctor's details from the database
        const doctor = await DOCTOR.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }
        // Fetch all appointments for the doctor
        const allAppointments = await APPOINTMENT.find({ doctorId });
        // Calculate the count of completed and remaining appointments
        const completedAppointments = allAppointments.filter(appointment => appointment.active === false);
        const remainingAppointments = allAppointments.filter(appointment => appointment.active === true);
        return res.status(200).json({
            success: true,
            completedAppointments: completedAppointments,
            remainingAppointments: remainingAppointments,
        });
    }
    catch (err) {
        console.error('Error in getDoctorAppointments:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
export const endMeeting = async (req, res) => {
    try {
        const { appointmentId, screenshotURL } = req.body;
        // Find the appointment in the database
        const appointment = await APPOINTMENT.findById(appointmentId);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        // Mark the appointment as inactive (meeting ends)
        appointment.active = false;
        appointment.screenshotURL = screenshotURL;
        await appointment.save();
        return res.status(200).json({ success: true, message: 'Meeting ended successfully' });
    }
    catch (err) {
        console.error('Error in endMeeting controller:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
//# sourceMappingURL=doctorController.js.map