import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Stripe from "stripe";
import { v2 as cloudinary } from "cloudinary";
import { ADMIN, APPOINTMENT, BLOG, DEPARTMENT, DOCTOR, FEEDBACK, REPORT_DOCTOR, USER, PLAN, PAYMENT, COUPON, SUBSCRIPTION } from "../model/index.js";
import { isValid } from "date-fns";
dotenv.config();
//* Initialize Cloudinary API
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: "2022-11-15",
});
/*
 *Admin Controllers
 */
//* ADMIN-LOGIN
export const login = async (req, res) => {
    try {
        //* validating email *
        const user = await ADMIN.findOne({ email: req.body.email });
        if (!user) {
            // If no user returning error response with code 200
            return res.status(200).send({
                success: false,
                message: "user does not exist",
                error: "email",
            });
        }
        // comparing hashed password with bcrypt
        // const match = await bcrypt.compare(req.body.password, user.password);
        if (!(req.body.password === user.password)) {
            // If the password is incorrect returning error with code 200
            return res.status(200).send({
                success: false,
                message: "password doesn't match",
                error: "password",
            });
        }
        // Credential verified
        // Creating a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        // Sending succes a succesful login response with token
        return res
            .status(200)
            .send({ success: true, message: "login succesful", token });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ success: false, message: "internal server error" });
    }
};
export const addDoctor = async (req, res) => {
    try {
        //* Destructuring Data from request body
        const doctor = {
            firstName: req.body.firstName,
            workTime: req.body.workTime,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            photoURL: req.body.photoURL,
            city: req.body.city,
            category: req.body.category,
            subcategory: req.body.subcategory,
            degree: req.body.degree,
            experience: req.body.experience,
            password: await bcrypt.hash(req.body.password, 10),
            timeSlots: req.body.timeSlots.map((slot) => ({
                date: slot.date,
                startTime: slot.startTime,
                endTime: slot.endTime,
                booked: false, // Set booked as false for all time slots during insertion
            })),
        };
        const doctorExists = await DOCTOR.findOne({ email: doctor.email });
        if (doctorExists) {
            // if doctor already exists with the same email, return an error with response code 200
            return res
                .status(200)
                .send({ success: false, message: "Doctor already exists" });
        }
        // Adding New Doctor to Database
        const newDoctor = new DOCTOR(doctor);
        await newDoctor.save();
        return res
            .status(200)
            .json({ success: true, message: "Doctor added successfully" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
};
//update doctor
export const updaterDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        // Find the doctor to be updated in the database
        const doctor = await DOCTOR.findById(doctorId);
        if (!doctor) {
            return res
                .status(404)
                .json({ success: false, message: "Doctor not found" });
        }
        // Update doctor's basic information
        if (req.body.firstName) {
            doctor.firstName = req.body.firstName;
        }
        if (req.body.lastName) {
            doctor.lastName = req.body.lastName;
        }
        if (req.body.email) {
            doctor.email = req.body.email;
        }
        if (req.body.phone) {
            doctor.phone = req.body.phone;
        }
        if (req.body.photoURL) {
            doctor.photoURL = req.body.photoURL;
        }
        if (req.body.city) {
            doctor.city = req.body.city;
        }
        if (req.body.category) {
            doctor.category = req.body.category;
        }
        if (req.body.subcategory) {
            doctor.subcategory = req.body.subcategory;
        }
        if (req.body.degree) {
            doctor.degree = req.body.degree;
        }
        if (req.body.experience) {
            doctor.experience = req.body.experience;
        }
        // Update doctor's timeSlots
        if (req.body.timeSlots) {
            // Map through the timeSlots array from the request body and update the existing time slots or add new ones
            doctor.timeSlots = req.body.timeSlots.map((slot) => ({
                date: slot.date,
                startTime: slot.startTime,
                endTime: slot.endTime,
                booked: slot.booked || false, // Set booked as false if not provided in the request
            }));
        }
        // Save the updated doctor document to the database
        await doctor.save();
        return res
            .status(200)
            .json({ success: true, message: "Doctor updated successfully" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
};
// export const updaterDoctor = async (req: Request, res: Response) => {
//   try {
//     //* Destructuring Data from request body
//     const {
//       firstName,
//       workTime,
//       lastName,
//       email,
//       phone,
//       photoURL,
//       city,
//       category,
//       subcategory,
//       experience,
//       timeSlots
//     }: IUserReqBody = req.body;
//     const doctorExists = await DOCTOR.findOne({ email });
//     if (doctorExists) {
//       // if doctor already exists with same email returning error with response code 200
//       const result = await DOCTOR.updateOne(
//         { email: email },
//         {
//           firstName,
//           workTime,
//           lastName,
//           email,
//           phone,
//           photoURL,
//           city,
//           category,
//           subcategory,
//           experience,
//           timeSlots
//         }
//       );
//       if (result) {
//         return res
//           .status(200)
//           .send({ success: true, message: "Doctor updated" });
//       }
//       return res.status(201).send({ success: false });
//     }
//     return res
//       .status(200)
//       .json({ success: true, message: "Doctor added succesfully" });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ success: false, message: "internal server error" });
//   }
// };
//Get doctor by id
export const getDoctorById = async (req, res) => {
    try {
        const id = req.params.id;
        const doctor = await DOCTOR.findOne({ _id: id });
        console.log(doctor);
        return res
            .status(200)
            .json({ data: { doctor }, success: true, message: "Doctor found" });
    }
    catch (error) {
        console.error("Error in admin: Get-Doctor :-", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
//* Get-All-Doctors
export const getAllDoctors = async (req, res) => {
    try {
        const { page } = req.query;
        const options = {
            page: Number(page) || 1,
            limit: 8,
        };
        const data = await DOCTOR.paginate({}, options);
        res
            .status(200)
            .send({ success: true, message: "get All doctors succesfull", data });
    }
    catch (error) {
        console.error("Error in admin: Get-Doctors :-", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
//* Delete-doctors
export const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await DOCTOR.findOne({ _id: id });
        const result = await DOCTOR.deleteOne({ _id: id });
        if (result.acknowledged) {
            res.status(200).send({
                success: true,
                message: `DR. ${doctor.firstName} deleted succesfully`,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "internal server error" });
    }
};
//* Add-Department
export const addDepartment = async (req, res) => {
    try {
        //* Finding if the Department already exists or not
        const { name } = req.body;
        const deptExists = await DEPARTMENT.findOne({ name });
        if (deptExists) {
            //* if department exists returning error with code 200
            return res
                .status(200)
                .send({ success: false, message: "Department already exists" });
        }
        //* Adding To Database
        const newDept = new DEPARTMENT({ name });
        const result = await newDept.save();
        if (result) {
            return res
                .status(200)
                .send({ success: true, message: "Department adding successful" });
        }
        return res
            .status(400)
            .send({ success: false, message: "Department adding failed" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal server error" });
    }
};
//* Add-Blog
export const addBlog = async (req, res) => {
    try {
        console.log(req.body);
        const blogData = {
            title: req.body.title,
            content: req.body.content,
            imageURL: req.body.imageURL,
        };
        const blog = new BLOG(blogData);
        await blog.save();
        return res
            .status(200)
            .send({ success: true, message: "Blog adding successfull" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal server error" });
    }
};
//* Get Single Blog
export const getSingleBlog = async (req, res) => {
    try {
        const id = req.params?.id;
        console.log(req.params?.id);
        const blogData = await BLOG.findOne({ _id: id });
        if (!blogData)
            return res
                .status(401)
                .send({ success: false, message: "no blog data found" });
        return res.status(200).send({
            success: true,
            message: "Get Single Blog Successfull",
            data: blogData,
        });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal Server Error" });
    }
};
//* edit blog
export const editBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await BLOG.updateOne({ _id: id }, data);
        if (result.acknowledged)
            res.status(200).send({ success: true, message: "Edit Blog Successfull" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
//* Delete Blog
export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await BLOG.deleteOne({ _id: id });
        if (result.acknowledged) {
            res
                .status(200)
                .send({ success: true, message: "delete blog Successful" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal server Error" });
    }
};
//* Get-All-Users
export const getAllUsers = async (req, res) => {
    try {
        const data = await USER.find({});
        res
            .status(200)
            .send({ success: true, message: "get all users succesfull", data });
    }
    catch (error) {
        console.log("Error in admin - Get All Users :-", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
//* Delete user by id
export const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await USER.deleteOne({ _id: id });
        if (result.deletedCount > 0) {
            return res.status(200).send({
                success: true,
                message: "user deleted successfull",
                result,
            });
        }
        res
            .status(500)
            .send({ success: false, message: "user with given id does not exist" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
// update user
export const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = {
            name: req.body.name,
            profileURL: req.body.profileURL,
            phone: req.body.phone,
            doctors: req.body.doctors,
        };
        const result = await USER.findByIdAndUpdate({ _id: id }, {
            $set: {
                name: userData.name,
                profileURL: userData.profileURL,
                phone: userData.phone,
                doctors: userData.doctors,
            },
        }, { new: true });
        if (result) {
            return res.status(200).send({
                success: true,
                message: "user updated successfull",
                result,
            });
        }
        res
            .status(500)
            .send({ success: false, message: "user with given id does not exist" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
//* Get Doctor reports
export const getDoctorReports = async (req, res) => {
    try {
        const doctorReports = await REPORT_DOCTOR.find({});
        res.status(200).send({
            success: true,
            message: "get doctor reports successfull",
            doctorReports,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
//* Get User Feedbacks
export const getUserFeedbacks = async (req, res) => {
    try {
        const feedbacks = await FEEDBACK.find({});
        res
            .status(200)
            .send({ success: true, message: "Get Feedbacks Successfull", feedbacks });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
//* Get Payments List
export const getPaymentsList = async (req, res) => {
    try {
        const payments = await PAYMENT.find({});
        if (payments) {
            return res.status(200).send({
                success: true,
                message: "All payments",
                data: payments,
            });
        }
        return res
            .status(500)
            .send({ success: false, message: "Error", data: payments });
    }
    catch (error) {
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
// export const getPaymentsList = async (req: Request, res: Response) => {
//   try {
//     const PAGE_SIZE = 8;
//     const options = {
//       limit: PAGE_SIZE,
//     };
//     let charges;
//     const { page } = req.query;
//     if (page === "next" && req.query.lastPaymentId) {
//       //* To get the next page of charges
//       charges = await stripe.charges.list({
//         ...options,
//         starting_after: req.query.lastPaymentId as string,
//       });
//     } else if (page === "prev" && req.query.firstPaymentId) {
//       //* To get the previous page of charges
//       charges = await stripe.charges.list({
//         ...options,
//         ending_before: req.query.firstPaymentId as string,
//       });
//     } else {
//       //* To get the first page of charges
//       charges = await stripe.charges.list(options);
//     }
//     res.status(200).send({
//       success: true,
//       message: "Get Payments Successful",
//       payments: charges,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ success: false, message: "Internal Server Error" });
//   }
// };
//* Get Payments refund List
export const getPaymentsRefundList = async (req, res) => {
    try {
        const PAGE_SIZE = 3;
        const options = {
            limit: PAGE_SIZE,
        };
        let refunds;
        const { page } = req.query;
        if (page === "next" && req.query.lastRefundId) {
            //* To get the next page of refunds
            refunds = await stripe.refunds.list({
                ...options,
                starting_after: req.query.lastRefundId,
            });
        }
        else if (page === "prev" && req.query.firstRefundId) {
            //* To get the previous page of refunds
            refunds = await stripe.refunds.list({
                ...options,
                ending_before: req.query.firstRefundId,
            });
        }
        else {
            //* To get the first page of refunds
            refunds = await stripe.refunds.list(options);
        }
        res
            .status(200)
            .send({ success: true, message: "Get Refunds Successful", refunds });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
//* get revenue
export const getRevenue = async (req, res) => {
    try {
        const revenue = await APPOINTMENT.aggregate([
            { $match: { cancelled: false } },
            { $group: { _id: null, totalPrice: { $sum: { $toInt: "$price" } } } },
        ]);
        // get today's date
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        // group appointments by date and sum up prices
        const result = await APPOINTMENT.aggregate([
            {
                $match: {
                    date: { $gte: startOfDay, $lt: endOfDay },
                },
            },
            {
                $group: {
                    _id: "$date",
                    totalPrice: { $sum: { $toDouble: "$price" } },
                },
            },
        ]);
        res.status(200).send({
            success: true,
            message: "get revenue successfull",
            revenue: revenue[0].totalPrice,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
//* get number of appointment
export const totalAppoinmtent = async (req, res) => {
    try {
        const maleCount = await APPOINTMENT.countDocuments({
            gender: "male",
        });
        const femaleCount = await APPOINTMENT.countDocuments({
            gender: "female",
        });
        const total = maleCount + femaleCount;
        const data = {
            maleCount,
            femaleCount,
            total,
        };
        res
            .status(200)
            .send({ success: true, message: "get revenue successfull", data });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
//* get number of doctors
export const getTotalDoctors = async (req, res) => {
    try {
        const doctorsCount = await DOCTOR.countDocuments({}, {});
        res.status(200).send({
            success: true,
            message: "get revenue successfull",
            doctorsCount,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
export const getMonthlyRevenue = async (req, res) => {
    try {
        const result = await APPOINTMENT.aggregate([
            {
                $match: {
                    cancelled: false,
                },
            },
            {
                $group: {
                    _id: {
                        month: { $month: { $toDate: "$date" } },
                        year: { $year: { $toDate: "$date" } },
                    },
                    revenue: { $sum: { $toDouble: "$price" } },
                },
            },
            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1,
                },
            },
        ]);
        const monthlyRevenueArray = Array(12).fill(0);
        result.forEach((item) => {
            const monthIndex = item._id.month - 1;
            monthlyRevenueArray[monthIndex] = item.revenue;
        });
        return res.status(200).send({
            success: true,
            message: "get revenue successfull",
            data: monthlyRevenueArray,
        });
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
// Plans
export const addPlans = async (req, res) => {
    try {
        const planData = {
            name: req.body.name,
            number_of_expiration_day: req.body.number_of_expiration_day,
            maximum_image: req.body.maximum_image,
            monthly_max_appointment: req.body.monthly_max_appointment,
            online_consulting: req.body.online_consulting,
            price: req.body.price,
            daily_max_appointment: req.body.daily_max_appointment,
            message_system_with_patient: req.body.message_system_with_patient,
            status: req.body.status,
            doctors: req.body.doctors,
        };
        if (!req.body._id || req.body._id == null || req.body._id == undefined) {
            const plan = new PLAN(planData);
            await plan.save();
            res
                .status(200)
                .send({ success: true, message: "plan added successfull" });
        }
        else {
            const result = await PLAN.updateOne({ _id: req.body._id }, planData);
            res
                .status(200)
                .send({ success: true, message: "plan updated successfull" });
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
export const deletePlanById = async (req, res) => {
    const planId = req.params.id;
    const result = await PLAN.deleteOne({ _id: planId });
    res
        .status(200)
        .send({ success: true, message: "plan deleted successfully", result });
};
//coupon
export const createCoupon = async (req, res) => {
    const couponData = {
        name: req.body.name,
        code: req.body.code,
        discount: req.body.discount,
        discountType: req.body.discountType,
    };
    if (!req.body.id || req.body.id === null || req.body.id === undefined) {
        const newCoupon = new COUPON(couponData);
        const response = await newCoupon.save();
        if (response) {
            return res.status(200).send({
                success: true,
                message: "coupon created successfully",
            });
        }
        else {
            return res
                .status(500)
                .send({ success: false, message: "there is some problem" });
        }
    }
    const result = await COUPON.updateOne({ _id: req.body.id }, couponData);
    console.log(req.body.id);
    console.log(result);
    if (result.modifiedCount > 0) {
        return res.status(200).send({
            success: true,
            message: "coupon updated successfully",
        });
    }
    return res
        .status(500)
        .send({ success: false, message: "Internal server error" });
};
export const deleteCouponById = async (req, res) => {
    const couponId = req.params.id;
    const result = await COUPON.deleteOne({ _id: couponId });
    console.log(result);
    if (result.deletedCount > 0) {
        res
            .status(200)
            .send({ success: true, message: "coupon deleted successfully", result });
    }
    else {
        res.status(500).send({ success: true, message: "Error occurred" });
    }
};
// Appointments
export const getAppointments = async (req, res) => {
    try {
        const appointments = await APPOINTMENT.find({});
        if (appointments) {
            res
                .status(200)
                .send({
                success: true,
                message: "Here are all appointments",
                data: appointments,
            });
        }
    }
    catch (error) {
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
export const createAppointment = async (req, res) => {
    try {
        const user = await USER.findOne({ _id: req.body.userId });
        // console.log(user);
        const plan = await PLAN.findById(user.plans);
        if (!plan) {
            return res
                .status(400)
                .send({ success: false, message: "Invalid planId" });
        }
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        // Get the start of the month in "YYYY-MM-DD" format
        const startOfMonthFormatted = startOfMonth.toISOString().slice(0, 10);
        // Calculate the end of the month by adding one month to the start date and then subtracting one day
        const endOfMonth = new Date(startOfMonth);
        endOfMonth.setMonth(endOfMonth.getMonth() + 1);
        endOfMonth.setDate(endOfMonth.getDate() - 1);
        // Get the end of the month in "YYYY-MM-DD" format
        const endOfMonthFormatted = endOfMonth.toISOString().slice(0, 10);
        console.log(startOfMonthFormatted, endOfMonthFormatted);
        const existingAppointments = await APPOINTMENT.find({
            userId: req.body.userId,
            doctorId: req.body.doctorId,
            date: { $gte: startOfMonthFormatted, $lte: endOfMonthFormatted }, // Use $lte to include appointments on the last day of the month
        });
        console.log(existingAppointments);
        if (existingAppointments.length >= plan.monthly_max_appointment) {
            return res
                .status(400)
                .send({
                success: false,
                message: "You have reached the maximum allowed appointments for this month with this doctor",
            });
        }
        const userAppointments = await APPOINTMENT.find({
            userId: req.body.userId,
            doctorId: req.body.doctorId,
            date: req.body.date,
        });
        if (userAppointments.length > 0) {
            return res
                .status(400)
                .json({
                error: "You already have an appointment with this doctor on this date",
            });
        }
        if (existingAppointments.length >= plan.monthly_max_appointment) {
            return res.status(400).send({
                success: false,
                message: "You have reached the maximum allowed appointments for this month with this doctor",
            });
        }
        // Validate date and time format
        if (!isValid(new Date(req.body.date))) {
            return res
                .status(400)
                .send({ success: false, message: "Invalid date or time format" });
        }
        // Check if the doctor exists and get the doctor's time slots
        const doctor = await DOCTOR.findById(req.body.doctorId);
        if (!doctor) {
            return res
                .status(400)
                .send({ success: false, message: "Invalid doctorId" });
        }
        // console.log(doctor.timeSlots);
        // Check if the selected time slot is available
        // console.log(req.body.date, req.body.startTime);
        const startTimeWithLeadingZero = req.body.startTime.padStart(5, "0");
        const selectedTimeSlot = doctor.timeSlots.find((slot) => slot.date === req.body.date &&
            slot.startTime === startTimeWithLeadingZero);
        if (!selectedTimeSlot || selectedTimeSlot.booked) {
            return res.status(400).send({
                success: false,
                message: "Selected time slot is not available",
            });
        }
        // Mark the time slot as booked
        selectedTimeSlot.booked = true;
        // console.log(selectedTimeSlot);
        // Save the updated doctor document to the database
        await doctor.save();
        // Create the appointment
        const appointment = await APPOINTMENT.create({
            userId: req.body.userId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            consultation_type: req.body.consultation_type,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            mobile: req.body.mobile,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            doctorName: req.body.doctorName,
            doctorId: req.body.doctorId,
            cancelled: req.body.cancelled,
            active: req.body.active,
            payment_intent: req.body.payment_intent,
        });
        if (appointment) {
            res
                .status(200)
                .send({ success: true, message: "Appointment created successfully" });
        }
        else {
            res
                .status(400)
                .send({ success: false, message: "Error creating appointment" });
        }
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal server error" });
    }
};
export const getDoctorsAssignedByAdmin = async (req, res) => {
    try {
        const userId = req.body.id;
        const selectedCity = req.query.city;
        const selectedCategory = req.query.category;
        const selectedSubcategory = req.query.subcategory;
        // Fetch the user based on the userId
        const user = await USER.findOne({ _id: userId });
        if (!user) {
            return res
                .status(404)
                .send({ success: false, message: "User not found" });
        }
        // Fetch the plan selected by the user
        const plan = await PLAN.findById(user.plans);
        if (!plan) {
            return res
                .status(404)
                .send({ success: false, message: "Plan not found" });
        }
        const doctorsInPlan = await DOCTOR.find({ _id: { $in: plan.doctors } });
        const doctorsInCity = doctorsInPlan.filter((doctor) => doctor.city === selectedCity);
        const categoriesInCity = [
            ...new Set(doctorsInCity.map((doctor) => doctor.category)),
        ];
        const doctorsInCategory = doctorsInCity.filter((doctor) => doctor.category === selectedCategory);
        const subcategoriesInCategory = [
            ...new Set(doctorsInCategory.map((doctor) => doctor.subcategory)),
        ];
        const doctorsInSubcategory = doctorsInCategory.filter((doctor) => doctor.subcategory === selectedSubcategory);
        const filteredDoctors = doctorsInSubcategory.map((doctor) => {
            const { password, ...doctorData } = doctor.toObject();
            return doctorData;
        });
        res.status(200).send({
            success: true,
            message: "Filtered doctors",
            data: filteredDoctors,
            availableCategories: categoriesInCity,
            availableSubcategories: subcategoriesInCategory,
        });
    }
    catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).send({ success: false, message: "Error fetching doctors" });
    }
};
export const createOrUpdateSubscription = async (req, res) => {
    try {
        const { name, plans } = req.body;
        // Check if the subscription with the given name already exists
        const existingSubscription = await SUBSCRIPTION.findOne({ name });
        if (existingSubscription) {
            // Update the existing subscription
            existingSubscription.plans.push(...plans);
            const updatedSubscription = await existingSubscription.save();
            res.status(200).send({
                success: true,
                message: "Subscription updated successfully",
                data: updatedSubscription,
            });
        }
        else {
            // Create a new subscription
            const newSubscription = await SUBSCRIPTION.create({ name, plans });
            res.status(201).send({
                success: true,
                message: "Subscription created successfully",
                data: newSubscription,
            });
        }
    }
    catch (error) {
        console.error("Error creating or updating subscription:", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
export const deletePlanFromSubscription = async (req, res) => {
    try {
        const { name, planId } = req.body;
        // Find the subscription by name
        const subscription = await SUBSCRIPTION.findOne({ name });
        if (!subscription) {
            return res.status(404).send({ success: false, message: "Subscription not found" });
        }
        // Find the index of the plan in the plans array by planId
        const planIndex = subscription.plans.findIndex((plan) => plan.id === planId);
        if (planIndex === -1) {
            return res.status(404).send({ success: false, message: "Plan not found in the subscription" });
        }
        // Remove the plan from the plans array
        subscription.plans.splice(planIndex, 1);
        // Save the updated subscription
        const updatedSubscription = await subscription.save();
        res.status(200).send({
            success: true,
            message: "Plan deleted from subscription successfully",
            data: updatedSubscription,
        });
    }
    catch (error) {
        console.error("Error deleting plan from subscription:", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
export const deleteSubscriptionById = async (req, res) => {
    try {
        const subscriptionId = req.params.id;
        // Find the subscription by ID
        const result = await SUBSCRIPTION.deleteOne({ _id: subscriptionId });
        // console.log(result);
        if (result.deletedCount === 0) {
            return res.status(404).send({ success: false, message: "Subscription not found" });
        }
        // Delete the subscription
        // await existingSubscription.remove();
        res.status(200).send({
            success: true,
            message: "Subscription deleted successfully",
        });
    }
    catch (error) {
        console.error("Error deleting subscription:", error);
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};
//# sourceMappingURL=adminController.js.map