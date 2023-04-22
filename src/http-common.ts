import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
