
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { requestInterceptor } from '../interceptors/AxiosInterceptor';
import { errorHandler } from '../interceptors/ErrorHandlerInterceptor';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.thedogapi.com/v1'
    });

    this.api.interceptors.request.use(requestInterceptor, (error) => {
      return Promise.reject(error);
    });

    this.api.interceptors.response.use(undefined, errorHandler);
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.api.get<T>(url, config).then((response) => response.data);
  }

  // Add other HTTP methods as needed (post, put, delete, etc.)
}

const apiService = new ApiService();
export default apiService;