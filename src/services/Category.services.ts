import axiosInstance from "@/configs/api";

// Define the API endpoint URLs as constants
const CATEGORIES_API_URL = "/public/get-categories";

// Define a TypeScript interface for the Category
export interface Category {
  _id: string;
  rank: string;
  name: string;
  isActive: boolean;
}

// Function to get programs
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get<Category[]>(CATEGORIES_API_URL);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching categories:", error);
    throw error;
  }
};
