import axiosInstance from "@/configs/api";

// Define the API endpoint URLs as constants
const PROGRAMS_API_URL = "/public/get-programs";

// Define a TypeScript interface for the Program object
export interface Program {
  id: string | null;
  title: string | number;
  image: string;
  description: string;
  sdate: string;
  edate: string;
  duration: number;
  language: string;
  price: string;
  agendamaintitle: string;
  agendaList: AgendaItem[];
  agendainclude: AgendaItem[];
  qa: QAItem[];
}

export interface AgendaItem {
  title: string;
  description: string;
}

export interface QAItem {
  question: string;
  answer: string;
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
