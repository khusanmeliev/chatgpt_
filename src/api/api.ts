import axios from "axios";

const BASE_URL = "https://api.openai.com/v1";

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;

  return config;
});
