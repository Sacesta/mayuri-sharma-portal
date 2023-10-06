import axiosInstance from "@/configs/api";

// Define the API endpoint URLs as constants
const PROGRAMS_API_URL = "/public/get-programs";
const PROGRAM_API_URL = "/public/get-program";
const PAYMENT_URL = "/payment/create-checkout-session";

// Define a TypeScript interface for the Program object
export interface Program {
  _id: string | null;
  title: string;
  image: string;
  description: string;
  sdate: string;
  edate: string;
  duration: number;
  language: string;
  price: number;
  batchTiming: string;
  agandamaintitle: string;
  agandaList: AgendaItem[];
  agandainclude: AgendaItem[];
  qa: QAItem[];
  reviews: ReviewItem[];
  free: boolean;
  isArtOfLiving: boolean;
  isArtOfLivingUrl: string;
  whatsappUrl: string;
  zoomUrl: string;
  host: HostItem[];
  updatedAt: string;
}

export interface HostItem {
  name: string;
  description: string;
  img: string;
}
export interface AgendaItem {
  title: string;
  description: string;
  _id: string;
}

export interface ReviewItem {
  name: string;
  country: string;
  review: string;
  profileImg: string;
  _id: string;
  video: string;
}

export interface QAItem {
  question: string;
  answer: string;
  _id: string;
}

export interface PostProgram {
  userId: string;
  cartItems: CartItem[];
}

export interface CartItem {
  name: string;
  description: string;
  images: string[];
  id: string | null;
  price: number;
  quantity: number;
}

// Function to get programs
export const getPrograms = async () => {
  try {
    const response = await axiosInstance.get<Program[]>(PROGRAMS_API_URL);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching programs:", error);
    throw error;
  }
};

export const getProgram = async (pId: string) => {
  try {
    const response = await axiosInstance.get<Program>(
      PROGRAM_API_URL + `/${pId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export interface CheckoutSession {
  url: string;
}

export const registerProgram = async (payload: PostProgram) => {
  try {
    const response = await axiosInstance.post<CheckoutSession>(
      PAYMENT_URL,
      payload
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
