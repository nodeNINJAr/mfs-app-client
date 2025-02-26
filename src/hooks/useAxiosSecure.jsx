import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

//
const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    //
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
       async(error) => {
        if (error.status === 401 || error.status === 403) {
         await logout();
          navigate("/auth/login");
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;