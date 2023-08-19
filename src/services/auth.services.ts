import axiosInstance from "@/configs/api";

// Define the API endpoint URLs as constants
const LOGIN_API_URL = "/user/clientLogin";
const REGISTER_API_URL = "/user/clientRegister";

interface SessionData {
  auth: boolean;
  token: string;
  status: string;
}

interface ResponseData {
  data: {
    session: SessionData;
  };
  statusCode: number;
  message: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ApiResponse {
  data: Record<string, any>; // You can replace "any" with a more specific type if needed
  statusCode: number;
  message: string;
}

export interface UserRegistration {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

// Function to perform login
export const loginService = async (payload: LoginPayload) => {
  try {
    const response = await axiosInstance.post<ResponseData>(
      LOGIN_API_URL,
      payload
    );
    console.log(response);
    let accesstoken = response?.data?.data?.session?.token;
    if (accesstoken) localStorage.setItem("accessToken", accesstoken);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error during login:", error);
    throw error;
  }
};

// Function to perform registration
export const registerService = async (payload: UserRegistration) => {
  try {
    const response = await axiosInstance.post(REGISTER_API_URL, payload);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error during Registration:", error);
    throw error;
  }
};

export default loginService;
