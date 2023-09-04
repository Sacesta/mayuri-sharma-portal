import { useState } from "react";
import { toast } from "react-toastify";
import {
  registerSubscriber,
  NewsLetterPayload,
} from "@/services/newsLetter.services";

const useNewsLetterSubmission = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (email: string, fullName: string) => {
    try {
      setLoading(true);
      const payload: NewsLetterPayload = {
        email,
        fullName,
      };

      const response = await registerSubscriber(payload);
      if (response.success === true) {
        toast.success("You are subscribed");
      }
    } catch (error: any) {
      console.error(error);
      const errResp = error?.response?.data?.message;
      toast.error(errResp ? errResp : "Couldn't Subscribe");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    loading,
  };
};

export default useNewsLetterSubmission;
