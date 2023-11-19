import axios, { InternalAxiosRequestConfig  } from 'axios';

const addHeaders = (config: InternalAxiosRequestConfig ) => {
  config.headers.set(
    'x-api-key', 'live_SuYPHKLerg5vyOCBxpw08WTn8UWjmClTAyDquG1l3MV3uhuXMXcKAn51T4Un2Q0m',
  );
  return config;
};

axios.interceptors.request.use(addHeaders);

export default addHeaders;