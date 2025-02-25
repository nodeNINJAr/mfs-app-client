import axios from 'axios'
import React from 'react'

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    withCredentials:true,
  })



  return axiosPublic;
}

export default useAxiosPublic