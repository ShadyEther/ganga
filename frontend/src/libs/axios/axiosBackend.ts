import axios from "axios";

export const axiosBackend = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
    // withCredentials:true,
  });

