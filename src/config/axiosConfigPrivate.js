import axios from "axios";

export const axiosConfigPrivate = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosConfigPrivate.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
// cuando el servicio regrese un 401 devuelva a Login
//You can intercept requests or responses before they are handled by then or catch.
axiosConfigPrivate.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      error &&
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      localStorage.clear();
      sessionStorage.clear();
      //window.location.pathname = "/login";
    }
    return Promise.reject(error);
});