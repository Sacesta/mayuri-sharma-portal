import axiosInstance from "@/configs/api";

// Define the API endpoint URLs as constants
const PODCASTS_API_URL = "/public/get-podcast";

// Define a TypeScript interface for the Category
export interface Podcast {
  _id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  category: string;
}

// Function to get programs
export const getPodcasts = async () => {
  try {
    const response = await axiosInstance.get<Podcast[]>(PODCASTS_API_URL);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching podcasts:", error);
    throw error;
  }
};
