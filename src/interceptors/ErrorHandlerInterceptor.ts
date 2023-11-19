import { AxiosError } from 'axios';

export const errorHandler = (error: AxiosError): Promise<never> => {
  if (error.response) {
    console.error('Response Error:', error.response.data);
  } else if (error.request) {
    console.error('Request Error:', error.request);
  } else {
    console.error('Error:', error.message);
  }
  return Promise.reject(error);
};