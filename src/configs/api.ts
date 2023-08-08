import axios from "axios";

// const Window = window as any;
// let document = Window.document;

// Axios instance
const axiosInstance = axios.create({
  baseURL: "https://mayuri-admin-be.onrender.com",
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

// function showLoading(loadingOverlay: any) {
//   if (loadingOverlay) {
//     document.activeElement.blur();
//     if (loadingOverlay.classList.contains("loaderhidden")) {
//       loadingOverlay.classList.remove("loaderhidden");
//     }
//   }
// }

// function disableLoading(loadingOverlay: any) {
//   if (loadingOverlay) loadingOverlay.classList.add("loaderhidden");
// }

axiosInstance.interceptors.request.use(
  function (config: any) {
    console.log("Request started");
    // let loadingOverlay = document.querySelector(".loading");
    // showLoading(loadingOverlay);
    return config;
  },
  function (error) {
    console.log("Request ended");
    // let loadingOverlay = document.querySelector(".loading");
    // disableLoading(loadingOverlay);
  }
);

axiosInstance.interceptors.response.use(function (response) {
  console.log(response);
  console.log("Request ended");
  // let loadingOverlay = document.querySelector(".loading");
  // disableLoading(loadingOverlay);
  return response;
});

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
