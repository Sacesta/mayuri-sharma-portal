"use client";

import { User, revalidateToken } from "@/services/auth.services";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store"; // Import your Redux store type definitions
import { clearUser, setUser } from "@/redux/features/userSlice";

interface AuthGuardProps {
  children: React.ReactNode;
}

function AuthGuard({ children }: AuthGuardProps) {
  const dispatch = useDispatch<AppDispatch>(); // Use the AppDispatch type for dispatch

  const revalidation = async (token: string) => {
    try {
      const response = await revalidateToken(token);
      console.log(response);
      const user: User = response.user;
      // Handle the response if needed
      dispatch(setUser(user));
    } catch (error) {
      dispatch(clearUser());
      // Handle errors if needed
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken") as string;

    const revalidate = async () => {
      await revalidation(token);
    };

    if (token) {
      revalidate();
    }
  }, [dispatch]);

  return <>{children}</>;
}

export default AuthGuard;
