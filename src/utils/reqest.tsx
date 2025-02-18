import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';

// Define a type for the response data
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8001',
  timeout: 5000,
});

const requestInterceptor = (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
  config.headers = config.headers || {};

  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config as InternalAxiosRequestConfig;
};

axiosInstance.interceptors.request.use(requestInterceptor, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    if (response.data.code !== 1000) {
      return Promise.reject(response.data);
    }
    return response;
  },
  (error) => {
    console.error('Network Error:', error);
    return Promise.reject(error);
  }
);

// Create a custom hook for making API requests
function useAxios<T>(url: string, method: string = 'get', requestData: any = null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response: AxiosResponse<ApiResponse<T>>;
        switch (method.toLowerCase()) {
          case 'post':
            response = await axiosInstance.post<ApiResponse<T>>(url, requestData);
            break;
          case 'put':
            response = await axiosInstance.put<ApiResponse<T>>(url, requestData);
            break;
          case 'delete':
            response = await axiosInstance.delete<ApiResponse<T>>(url, { data: requestData });
            break;
          default:
            response = await axiosInstance.get<ApiResponse<T>>(url);
            break;
        }

        setData(response.data.data);
        setError(null);
      } catch (err: any) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, requestData]);

  return { data, loading, error };
}

export { useAxios, axiosInstance };