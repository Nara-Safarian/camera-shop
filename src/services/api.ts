import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import {StatusCodes} from 'http-status-codes';
// import {handleError} from './handle-error';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        // eslint-disable-next-line no-console
        console.log('-------error-----------------------');
        // eslint-disable-next-line no-console
        console.log(error.response.data);
        // eslint-disable-next-line no-console
        console.log('------------------------------');
        // handleError(error.response.data.error, error.response.status);
      }

      throw error;
    }
  );

  return api;
};
