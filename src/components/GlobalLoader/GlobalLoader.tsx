"use client";
import React, { useState } from "react";
import "./loader.css";
import axiosInstance from "@/configs/api";

const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCount, setLoadingCount] = useState(0);

  const increaseLoadingCount = () => {
    setLoadingCount((prevCount) => prevCount + 1);
  };

  const decreaseLoadingCount = () => {
    setLoadingCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  axiosInstance.interceptors.request.use(
    (config) => {
      increaseLoadingCount();
      setIsLoading(true);
      return config;
    },
    (error) => {
      decreaseLoadingCount();
      setIsLoading(false);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      decreaseLoadingCount();
      setIsLoading(false);
      return response;
    },
    (error) => {
      decreaseLoadingCount();
      setIsLoading(false);
      return Promise.reject(error);
    }
  );

  return (
    <div
      className={`loading ` + (isLoading && loadingCount > 0 ? "" : "hidden")}
    >
      <div className="uil-ring-css" style={{ transform: "scale(0.79)" }}>
        <div></div>
      </div>
    </div>
  );
};

export default GlobalLoader;
