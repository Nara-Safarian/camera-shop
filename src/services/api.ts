import axios, {AxiosInstance} from 'axios';
import { toast } from 'react-toastify';


const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      toast.error(`Произошла ошибка, ${String(error)}`);
      throw error;
    }
  );

  return api;
};
