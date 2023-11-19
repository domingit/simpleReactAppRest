
export const requestInterceptor = (config) => {
  // Add your custom header logic here
  config.headers['Content-Type'] = 'application/json';
  config.headers['x-api-key'] = 'live_SuYPHKLerg5vyOCBxpw08WTn8UWjmClTAyDquG1l3MV3uhuXMXcKAn51T4Un2Q0m';
  return config;
};