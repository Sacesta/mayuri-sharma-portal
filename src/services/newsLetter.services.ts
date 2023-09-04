import axiosInstance from "@/configs/api";

const NEWSLETTER_URL = "/newsletter/create-subscriber";

export interface NewsLetterPayload {
  email: string;
  fullName: string;
}

export const registerSubscriber = async (payload: NewsLetterPayload) => {
  try {
    const response = await axiosInstance.post(NEWSLETTER_URL, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
