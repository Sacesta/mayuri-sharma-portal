import axios from "axios";

// window
// const Window = window as any;

// Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 600000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

// export function getUserAccessToken() {
//   return localStorage.getItem("userAccessToken");
// }

// function getUserRefreshToken() {
//   return localStorage.getItem("userRefreshToken");
// }

// axiosInstance.interceptors.request.use(
//   function (config: any) {
//     // Window.document.getElementById('loader').className = 'active';
//     // Do something before request is sent
//     const accessToken = getUserAccessToken();

//     const url: string = window.location.href;

//     if (accessToken) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `${accessToken}`,
//       };
//     }
//     return config;
//   },

//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(function (response) {
//   if (response.config.url === "api/user/login" && response.status === 200) {
//     localStorage.setItem("userAccessToken", response.data.token);
//   }

//   return response;
// });

export default axiosInstance;
