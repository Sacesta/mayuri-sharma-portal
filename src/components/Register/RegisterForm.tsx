"use client";
import { UserRegistration, registerService } from "@/services/auth.services";
import React, { useReducer } from "react";
import { toast } from "react-toastify";

const initialState = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  isFormValid: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, [`${action.field}Error`]: action.error };
    case "SET_FORM_VALIDITY":
      return { ...state, isFormValid: action.isValid };
    case "RESET":
      return {
        ...state,
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        isFormValid: false,
      };
    default:
      return state;
  }
};

const RegisterForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFieldChange = (event: any) => {
    const { name, value } = event.target;
    dispatch({ type: "SET_FIELD", field: name, value });

    if (name === "email") {
      if (!validateEmail(value)) {
        dispatch({
          type: "SET_ERROR",
          field: "email",
          error: "Invalid email address",
        });
      } else {
        dispatch({ type: "SET_ERROR", field: "email", error: "" });
      }
    } else if (name === "password") {
      if (!validatePassword(value)) {
        dispatch({
          type: "SET_ERROR",
          field: "password",
          error: "Password must be at least 6 characters",
        });
      } else {
        dispatch({ type: "SET_ERROR", field: "password", error: "" });
      }
    } else if (name === "userName") {
      if (value?.length < 3) {
        dispatch({
          type: "SET_ERROR",
          field: "userName",
          error: "Username cant be less then 3 letters",
        });
      } else dispatch({ type: "SET_ERROR", field: "userName", error: "" });
    }

    const isFormValid = validateForm();
    dispatch({ type: "SET_FORM_VALIDITY", isValid: isFormValid });
  };

  const validateForm = () => {
    const { userName, firstName, lastName, email, password } = state;

    if (userName?.length < 3) {
      return false;
    }

    if (!firstName || !lastName) {
      return false;
    }

    if (!validateEmail(email)) {
      return false;
    }

    if (!validatePassword(password)) {
      return false;
    }

    return true;
  };

  const validateEmail = (email: string) => {
    // Implement email validation logic
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password: string) => {
    // Implement password validation logic
    return password.length >= 6;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let form: HTMLFormElement = document.getElementById(
      "register"
    ) as HTMLFormElement;
    try {
      const { userName, firstName, lastName, email, password } = state;
      const payload: UserRegistration = {
        userName,
        fullName: `${firstName} ${lastName}`,
        email,
        password,
        isAdmin: false,
      };

      const data = await registerService(payload);
      toast.success("Registered Successfully");
      console.log(event);
      dispatch({ type: "RESET" });
      form.reset();
      console.log(data);
    } catch (error: any) {
      const { response } = error;
      console.log(response?.data);
      toast.error(response?.data?.message || "Error during registration");
    }
  };

  return (
    <section className="pt-5 ">
      <div className="flex px-[15px] justify-center">
        <div className="col-sm-8 form-main-wrap  px-4 py-6 shadow-lg max-w-[767px]">
          <div className="field_form icon_form">
            <form id="register" onSubmit={handleSubmit}>
              <h6 className="mb-4 text-[1rem] text-[#333]">
                Please fill the details below !
              </h6>
              <div className="row flex flex-wrap">
                <div className="form-group col-sm-6 mb-[1rem]  w-full md:w-1/2 px-[14px]">
                  <label className="text-[14px]">Username</label>
                  <div className="form-input">
                    <span>
                      <i className="ti-user" />
                    </span>
                    <input
                      value={state.userName}
                      placeholder="User Name "
                      id="userName"
                      className="w-full form-control border border-[#ced4da] py-[10px] pl-[35px] pr-[15px] outline-none focus:border-[#80bdff] rounded-[0.25rem] text-[14px] text-[#666]"
                      name="userName"
                      type="text"
                      onChange={handleFieldChange}
                      onBlur={handleFieldChange}
                    />
                  </div>
                  {state.userNameError && (
                    <p className="text-red-500 text-[12px] mt-1">
                      {state.userNameError}
                    </p>
                  )}
                </div>
                <div className="form-group col-sm-6 mb-[1rem] w-full md:w-1/2 px-[14px]">
                  <label className="text-[14px]">First Name</label>
                  <div className="form-input">
                    <span>
                      <i className="ti-user" />
                    </span>
                    <input
                      placeholder="First Name"
                      value={state.firstName}
                      id="first-name"
                      className="w-full form-control border border-[#ced4da] py-[10px] pl-[35px] pr-[15px] outline-none focus:border-[#80bdff] rounded-[0.25rem] text-[14px] text-[#666]"
                      name="firstName"
                      type="text"
                      onChange={handleFieldChange}
                      onBlur={handleFieldChange}
                    />
                  </div>
                </div>
                <div className="form-group col-sm-6 mb-[1rem] w-full md:w-1/2 px-[14px]">
                  <label className="text-[14px]">Last Name</label>
                  <div className="form-input">
                    <span>
                      <i className="ti-user" />
                    </span>
                    <input
                      placeholder="Last Name "
                      value={state.lastName}
                      id="last-name"
                      className="w-full form-control border border-[#ced4da] py-[10px] pl-[35px] pr-[15px] outline-none focus:border-[#80bdff] rounded-[0.25rem] text-[14px] text-[#666]"
                      name="lastName"
                      type="text"
                      onChange={handleFieldChange}
                      onBlur={handleFieldChange}
                    />
                  </div>
                </div>
                <div className="form-group col-sm-6 mb-[1rem] w-full md:w-1/2 px-[14px]">
                  <label className="text-[14px]">Email</label>
                  <div className="form-input">
                    <span>
                      <i className="ti-email" />
                    </span>
                    <input
                      placeholder="Email"
                      id="email"
                      value={state.email}
                      className="w-full form-control border border-[#ced4da] py-[10px] pl-[35px] pr-[15px] outline-none focus:border-[#80bdff] rounded-[0.25rem] text-[14px] text-[#666]"
                      type="email"
                      name="email"
                      onChange={handleFieldChange}
                      onBlur={handleFieldChange}
                    />
                  </div>
                  {state.emailError && (
                    <p className="text-red-500 text-[12px] mt-1">
                      {state.emailError}
                    </p>
                  )}
                </div>
                <div className="form-group col-sm-6 mb-[1rem] w-full md:w-1/2 px-[14px]">
                  <label className="text-[14px]">Password</label>
                  <div className="form-input">
                    <span>
                      <i className="ti-lock" />
                    </span>
                    <input
                      placeholder="Password"
                      id="password"
                      value={state.password}
                      className="w-full form-control border border-[#ced4da] py-[10px] pl-[35px] pr-[15px] outline-none focus:border-[#80bdff] rounded-[0.25rem] text-[14px] text-[#666]"
                      name="password"
                      type="password"
                      onChange={handleFieldChange}
                      onBlur={handleFieldChange}
                    />
                  </div>
                  {state.passwordError && (
                    <p className="text-red-500 text-[12px] mt-1">
                      {state.passwordError}
                    </p>
                  )}
                </div>
              </div>
              <button
                disabled={!state.isFormValid}
                className="disabled:cursor-not-allowed disabled:bg-[#7b91f3] w-full uppercase py-[8px] px-[20px] bg-[#647ff7] text-[14px] font-semibold text-white rounded-[0.25rem]"
              >
                Submit
              </button>
              <div className="col-lg-12 text-center">
                <div id="alert-msg" className="alert-msg text-center" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
