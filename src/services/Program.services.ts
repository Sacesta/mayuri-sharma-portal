import axiosInstance from "@/configs/api";

// Define the API endpoint URLs as constants
const PROGRAMS_API_URL = "/public/get-programs";
const PROGRAM_API_URL = "/public/get-program";

// Define a TypeScript interface for the Program object
export interface Program {
  _id: string | null;
  title: string | number;
  image: string;
  description: string;
  sdate: string;
  edate: string;
  duration: number;
  language: string;
  price: string;
  batchTiming: string;
  agandamaintitle: string;
  agandaList: AgendaItem[];
  agandainclude: AgendaItem[];
  qa: QAItem[];
  reviews: ReviewItem[];
  free: boolean;
  host: HostItem[];
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
}

export interface QAItem {
  question: string;
  answer: string;
  _id: string;
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
