/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable linebreak-style */
import dotenv from "dotenv";
import Stripe from "stripe";
import jwt from "jsonwebtoken";
import * as exportJs from "../model/index.js";
import { APPOINTMENT, PAYMENT, ADMIN, USER, PLAN, } from "../model/index.js";
import nodemailer from "nodemailer";
import randomstring from "randomstring";
import bcrypt from "bcryptjs";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: "2022-11-15",
});
//* User SignUp
// export const signup = async (req: Request, res: Response) => {
//   try {
//     /**
//      * * Getting user detiails from idToken
//      */
//     const { idToken } = req.body;
//     const user = await verifyFirebaseToken({ idToken });
//     const userData = {
//       name: user.displayName,
//       email: user.email,
//       profileURL: user.photoURL ? user?.photoURL : false,
//     };
//     // * Saving userData to Database
//     const newUser = new exportJs.USER(userData);
//     const response = await newUser.save();
//     const id = response?._id;
//     const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//       expiresIn: '1d',
//     });
//     mailService('welcome', user.email);
//     res.status(200).send({
//       success: true,
//       message: user?.photoURL ? 'google login succesful' : 'email login succesfull',
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ success: false, message: 'internal server error' });
//   }
// };
export const signup = async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            email: req.body.email,
            profileURL: req.body.profileURL,
            phone: req.body.phone,
            password: await bcrypt.hash(req.body.password, 10),
            doctors: req.body.doctors,
            isVerified: false,
        };
        console.log(userData);
        const newUser = new exportJs.USER(userData);
        const response = await newUser.save();
        if (response) {
            sendVerifyMail(req.body.name, req.body.email, newUser._id);
            return res.status(200).send({
                success: true,
                message: "signup successfull, please verify your mail",
            });
        }
        return res
            .status(500)
            .send({ success: false, message: "there is some problem" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: "internal server error" });
    }
};
// for send mailService
const sendVerifyMail = async (name, email, user_id) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "yagnesh.p@ahduni.edu.in",
                pass: "Yogi@1406",
            },
        });
        const mailOptions = {
            from: "yagnesh.p@ahduni.edu.in",
            to: email,
            subject: "For verification mail",
            html: "<p>Hii " +
                name +
                ', please click here to <a href="http://localhost:8080/api/user/verify?id=' +
                user_id +
                '"> Verify </a> your mail.</p>',
        };
        // eslint-disable-next-line @typescript-eslint/space-before-function-paren
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Email has been sent:- ", info.response);
            }
        });
    }
    catch (error) {
        console.log(error.message);
    }
};
export const verifyMail = async (req, res) => {
    try {
        const updateUser = await USER.updateOne({ _id: req.query.id }, { $set: { isVerified: true } });
        console.log(updateUser);
        // res.render("emailverified");
        res.send("Email Verified!!");
    }
    catch (error) {
        console.log(error.message);
    }
};
const sendResetPasswordMail = async (name, email, token) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "yagnesh.p@ahduni.edu.in",
                pass: "Yogi@1406",
            },
        });
        const mailOptions = {
            from: "yagnesh.p@ahduni.edu.in",
            to: email,
            subject: "For reset password",
            html: "<p>Hii " +
                name +
                ', please copy the lin and <a href="http://localhost:8080/api/user/reset-password?token=' +
                token +
                '"> reset your password </a></p>',
        };
        // eslint-disable-next-line @typescript-eslint/space-before-function-paren
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Email has been sent:- ", info.response);
            }
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(400).send({ success: false, message: error.message });
    }
};
//* User Login
export const login = async (req, res) => {
    try {
        //* validating email *
        const user = await exportJs.USER.findOne({ email: req.body.email });
        if (!user) {
            // If no user returning error response with code 200
            return res.status(200).send({
                success: false,
                message: "user does not exist",
                error: "email",
            });
        }
        // comparing hashed password with bcrypt
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
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
// forgot - password / reset password
export const forgetPassword = async (req, res) => {
    try {
        const email = req.body.email;
        const userData = await USER.findOne({ email: email });
        if (userData) {
            const randomString = randomstring.generate();
            const data = await USER.updateOne({ email: email }, { $set: { token: randomString } });
            sendResetPasswordMail(userData.name, userData.email, randomString);
            return res.status(200).send({
                success: true,
                message: "Please check your inbox of mail and reset your password",
            });
        }
        return res
            .status(200)
            .json({ success: true, message: "This email does not exist" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ success: false, message: "internal server error" });
    }
};
export const resetPassword = async (req, res) => {
    try {
        const token = req.query.token;
        const tokenData = await USER.findOne({ token: token });
        if (tokenData) {
            const password = req.body.password;
            const userData = await USER.findByIdAndUpdate({ _id: tokenData._id }, { $set: { password: password, token: "" } }, { new: true });
            res
                .status(200)
                .send({
                success: true,
                message: "Password has been reset",
                data: userData,
            });
        }
        else {
            res
                .status(200)
                .send({ success: true, message: "The link has been expired" });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: "internal server error" });
    }
};
// export const login = async (req: Request, res: Response) => {
//   try {
//     /**
//      * * Getting user Details from idToken
//      */
//     const { idToken } = req.body;
//     const user = await verifyFirebaseToken({   });
//     if (user) {
//       const userData = await exportJs.USER.findOne({ email: user?.email });
//       const id = userData?._id;
//       const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: '1d',
//       });
//       res.status(200).send({
//         success: true,
//         message: user?.photoURL ? 'google login succesful' : 'email login succesfull',
//         token,
//         user: userData,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ success: false, message: 'internal server error' });
//   }
// };
//* Get User Info
export const getUserInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await exportJs.USER.findById(id).exec();
        return res
            .status(200)
            .send({ success: true, message: "get user successful", data: user });
    }
    catch (error) {
        console.log("Error in userController : get user info :-", error);
        return res
            .status(500)
            .send({ success: false, message: "internal server error" });
    }
};
// create appointment
// export const createAppointment = async (req, res) => {
//   try {
//     const user = await USER.findOne({ _id: req.user.id });
//     const plan = await PLAN.findById(user.plans);
//     if (!plan) {
//       return res
//         .status(400)
//         .send({ success: false, message: "Invalid planId" });
//     }
//     const startOfMonth = new Date();
//     startOfMonth.setDate(1);
//     const endOfMonth = addMonths(startOfMonth, 1);
//     const existingAppointments = await APPOINTMENT.find({
//       userId: req.user.id,
//       doctorId: req.body.doctorId,
//       date: { $gte: startOfMonth, $lt: endOfMonth },
//     });
//     const userAppointments = await APPOINTMENT.find({
//       userId: req.user.id,
//       doctorId: req.body.doctorId,
//       date: req.body.date,
//     });
//     if (userAppointments.length > 0) {
//       return res.status(400).json({ error: 'You already have an appointment with this doctor on this date' });
//     }
//     if (existingAppointments.length >= plan.monthly_max_appointment) {
//       return res
//         .status(400)
//         .send({
//           success: false,
//           message:
//             "You have reached the maximum allowed appointments for this month with this doctor",
//         });
//     }
//     // Validate date and time format
//     if (!isValid(new Date(req.body.date))) {
//       return res
//         .status(400)
//         .send({ success: false, message: "Invalid date or time format" });
//     }
//     // Check if the doctor exists and get the doctor's time slots
//     const doctor = await DOCTOR.findById(req.body.doctorId);
//     if (!doctor) {
//       return res
//         .status(400)
//         .send({ success: false, message: "Invalid doctorId" });
//     }
//     console.log(doctor.timeSlots);
//     // Check if the selected time slot is available
//     console.log(req.body.date, req.body.startTime);
//     const startTimeWithLeadingZero = req.body.startTime.padStart(5, "0");
//     const selectedTimeSlot = doctor.timeSlots.find(
//       (slot) =>
//         slot.date === req.body.date &&
//         slot.startTime === startTimeWithLeadingZero
//     );
//     if (!selectedTimeSlot || selectedTimeSlot.booked) {
//       return res
//         .status(400)
//         .send({
//           success: false,
//           message: "Selected time slot is not available",
//         });
//     }
//     // Mark the time slot as booked
//     selectedTimeSlot.booked = true;
//     console.log(selectedTimeSlot);
//     // Save the updated doctor document to the database
//     await doctor.save();
//     // Create the appointment
//     const appointment = await APPOINTMENT.create({
//       userId: req.user.id,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       consultation_type: req.body.consultation_type,
//       age: req.body.age,
//       gender: req.body.gender,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       date: req.body.date,
//       startTime: req.body.startTime,
//       endTime: req.body.endTime,
//       doctorName: req.body.doctorName,
//       doctorId: req.body.doctorId,
//       cancelled: req.body.cancelled,
//       active: req.body.active,
//       payment_intent: req.body.payment_intent,
//     });
//     if (appointment) {
//       res
//         .status(200)
//         .send({ success: true, message: "Appointment created successfully" });
//     } else {
//       res
//         .status(400)
//         .send({ success: false, message: "Error creating appointment" });
//     }
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .send({ success: false, message: "Internal server error" });
//   }
// };
//* Get Doctors
export const getDoctorsbyDept = async (req, res) => {
    try {
        const department = req.query.name;
        const doctors = await exportJs.DOCTOR.find({ department });
        return res.status(200).send({
            success: true,
            message: "Get doctors by department successful",
            data: doctors,
        });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "internal server error" });
    }
};
//* WEB-HOOK (! For Stripe Payment )
export const webHooks = async (req, res) => {
    try {
        const sig = req.headers["stripe-signature"];
        const endpointSecret = null;
        let event;
        const jsonStringify = JSON.stringify(req.body);
        const payloadBuffer = Buffer.from(jsonStringify);
        let data;
        let eventType;
        if (endpointSecret) {
            try {
                event = stripe.webhooks.constructEvent(payloadBuffer, sig, endpointSecret);
                // console.log('webhook verified');
            }
            catch (err) {
                console.log(`Webhook Error: ${err.message}`);
                return res.status(400).send(`Webhook Error: ${err.message}`);
            }
            data = event.data.object;
            eventType = event.type;
        }
        else {
            data = req.body.data.object;
            eventType = req.body.type;
        }
        try {
            if (eventType === "checkout.session.completed") {
                const customer = await stripe.customers.retrieve(data.customer);
                // eslint-disable-next-line @typescript-eslint/dot-notation
                const appointments = customer?.["metadata"]?.appointments;
                const newAppointment = new exportJs.APPOINTMENT(JSON.parse(appointments));
                newAppointment.save();
            }
        }
        catch (error) {
            console.log(`Webhook Error: ${error.message}`);
        }
        return res.send().end();
    }
    catch (error) {
        console.log(`Webhook Error: ${error.message}`);
    }
};
//* Creating Stripe Payment
export const payment = async (req, res) => {
    try {
        const bodyData = req.body;
        try {
            const newAppointment = new exportJs.APPOINTMENT(bodyData);
            newAppointment.save();
            const customer = await stripe.customers.create({
                metadata: {
                    userId: bodyData.userId,
                    appointments: JSON.stringify(bodyData),
                },
            });
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price_data: {
                            currency: "inr",
                            product_data: {
                                name: bodyData?.doctorName,
                                metadata: {
                                    id: bodyData.doctorId,
                                    appointments: JSON.stringify(bodyData),
                                },
                            },
                            unit_amount: bodyData.price * 100,
                        },
                        quantity: 1,
                    },
                ],
                customer: customer.id,
                mode: "payment",
                success_url: `${process.env.CLIENT_URL}/success`,
                cancel_url: `${process.env.CLIENT_URL}/failure`,
            });
            return res.status(200).send({
                success: true,
                message: "payment successful",
                url: session.url,
            });
        }
        catch (error) {
            console.log(error);
            return res
                .status(500)
                .send({ success: false, message: "Internal Server Error" });
        }
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal Server Error" });
    }
};
//* Cancel Appointment
export const cancelAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await exportJs.APPOINTMENT.find({ _id: id });
        if (!appointment)
            return res
                .status(200)
                .send({ success: false, message: "Appointment not found" });
        await stripe.refunds.create({
            payment_intent: appointment?.payment_intent,
            amount: appointment?.price,
        });
        return res
            .status(200)
            .send({ success: true, message: "Appointment cancelled successfully" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal Server Error" });
    }
};
//* Check Available Timing
export const checkAvailableTiming = async (req, res) => {
    try {
        const { date, doctorId } = req.body;
        const response = await exportJs.APPOINTMENT.find({ date, doctorId })
            .select("time")
            .exec();
        return res.status(200).send({
            success: true,
            message: "Check Availability Successful",
            data: response,
        });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal Server Error" });
    }
};
//* Report Doctor
export const reportDoctor = async (req, res) => {
    try {
        const { userId, doctorId, reason } = req.body;
        const newReport = await new exportJs.REPORT_DOCTOR({
            userId,
            doctorId,
            reason,
        });
        await newReport.save();
        return res
            .status(200)
            .send({ success: true, message: "doctor reported Successfully" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal Server Error" });
    }
};
//* feedback
export const createFeedback = async (req, res) => {
    try {
        const { doctorId, userId, rating, feedback } = req.body;
        const newFeedback = await new exportJs.FEEDBACK({
            doctorId,
            userId,
            rating,
            feedback,
        });
        await newFeedback.save();
        return res
            .status(200)
            .send({ success: true, message: "Feedback added successfully" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ success: false, message: "Internal Server Error" });
    }
};
export const updateProfile = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user.id;
        if (id !== userId)
            return res.status(406).send({ success: false, message: "Invalid token" });
        const user = await exportJs.USER.findById(id);
        if (!user)
            return res
                .status(404)
                .send({ success: false, message: "User not found" });
        const { name, email, phone, profileURL } = req.body;
        const data = {
            name: name || user.name,
            email: email || user.email,
            phone: phone || user.phone,
            profileURL: profileURL || user.profileURL,
        };
        await exportJs.USER.findByIdAndUpdate(id, data);
        return res
            .status(200)
            .send({ success: true, message: "Update profile successful" });
    }
    catch (error) {
        console.error("Error in user controller: Update Profile :-", error);
        return res
            .status(500)
            .send({ success: false, message: "Internal Server Error" });
    }
};
export const getAppointment = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user.id;
        console.log(id, userId);
        if (id !== userId) {
            res.status(200).send({
                success: true,
                message: "failed (unauthorized) ",
                data: appointments,
            });
        }
        const appointments = await APPOINTMENT.find({ userId: userId });
        res.status(200).send({
            success: true,
            message: "get user appointments successful",
            data: appointments,
        });
    }
    catch (error) {
        console.log("Error in get user Appointment", error);
        res.status(500).send({ success: false, message: "internal server error" });
    }
};
//add payment
export const addUserPayment = async (req, res) => {
    const userId = req.user.id;
    if (userId !== req.body.userId) {
        return res
            .status(400)
            .send({ success: false, message: "Unauthorized user" });
    }
    const payment = await PAYMENT.create({
        userId: req.body.userId,
        user_name: req.body.user_name,
        paymentId: req.body.paymentId,
        amount: req.body.amount,
        planId: req.body.planId,
        purchasedDate: req.body.purchasedDate
    });
    const plan = await PLAN.findOne({ _id: req.body.planId });
    await USER.updateOne({ _id: req.body.userId }, { $set: { plans: req.body.planId, doctors: plan.doctors } });
    return res.status(200).send({
        success: true,
        message: "payment added successfully",
        data: payment,
    });
};
//get payments
export const getUserPayment = async (req, res) => {
    const uid = req.params.id;
    const user_id = req.user.id;
    const admin = await ADMIN.findOne({ _id: user_id });
    if (uid !== user_id && !admin) {
        return res.status(404).send({ success: false, message: "Unauthorized" });
    }
    const payments = await PAYMENT.find({ userId: uid });
    if (payments) {
        return res.status(200).send({
            success: true,
            message: "This are your payments",
            data: payments,
        });
    }
    return res.status(500).send({ success: false, message: "Error" });
};
export const getPaymentById = async (req, res) => {
    const pid = req.params.id;
    const user_id = req.user.id;
    const admin = await ADMIN.findOne({ _id: user_id });
    const payments = await PAYMENT.findOne({ paymentId: pid });
    // console.log(payments.userId === user_id || admin);
    if (payments.userId === user_id || admin) {
        return res.status(200).send({
            success: true,
            message: "This are your payments",
            data: payments,
        });
    }
    return res.status(500).send({ success: false, message: "Error" });
};
export const purchasedPlans = async (req, res) => {
    try {
        const user = await USER.findOne({ _id: req.user.id });
        if (user) {
            const planIds = user.plans;
            const plans = await PLAN.find({ _id: { $in: planIds } });
            res
                .status(200)
                .send({ success: true, message: "Here are your plans", data: plans });
        }
        else {
            res.status(500).send({ success: false, message: "Error" });
        }
    }
    catch (error) {
        res.status(500).send({ success: false, message: "Error fetching plans" });
    }
};
// export const getDoctorsAssignedByAdmin = async (req: Request, res: Response) => {
//   try {
//     const userId = req.user.id;
//     const selectedCity = req.query.city as string;
//     const selectedCategory = req.query.category as string;
//     const selectedSubcategory = req.query.subcategory as string;
//     const user = await USER.findOne({ _id: userId });
//     if (!user) {
//       return res.status(404).send({ success: false, message: "User not found" });
//     }
//     const plan = await PLAN.findById(user.plans[2]);
//     if (!plan) {
//       return res.status(404).send({ success: false, message: "Plan not found" });
//     }
//     const doctorsInPlan = await DOCTOR.find({ _id: { $in: plan.doctors } });
//     const doctorsInCity = doctorsInPlan.filter((doctor) => doctor.city === selectedCity);
//     const doctorsInCategory = doctorsInCity.filter((doctor) => doctor.category === selectedCategory);
//     const doctorsInSubcategory = doctorsInCategory.filter((doctor) => doctor.subcategory === selectedSubcategory);
//     res.status(200).send({ success: true, message: "Filtered doctors", data: doctorsInSubcategory });
//   } catch (error) {
//     console.error("Error fetching doctors:", error);
//     res.status(500).send({ success: false, message: "Error fetching doctors" });
//   }
// };
//# sourceMappingURL=userController.js.map