import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 30000000,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token && config.url.indexOf('/login') === -1) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

// Add a response interceptor
API.interceptors.response.use(
  (response) => {
    const data = {
      success: true,
      data: response.data,
      message: 'Petición exitosa!',
      code: response.status,
    };

    return data;
  },
  (error) => {
    const data = {
      success: false,
      data: error.response ? error.response.data : null,
      message: 'Petición fallida!',
      code: error.response ? error.response.status : -1,
    };
    const status = error.response ? error.response.status : -1;
    switch (status) {
      case 500:
        data.success = false;
        data.message = 'Disculpe, ha ocurrido un error interno.';
        break;
      case -1:
        data.success = false;
        data.message = 'Por favor revise su conexión a internet.';
        break;
      case 400:
        data.success = false;
        data.message = 'Disculpe, ha enviado una petición inválida.';
        break;
      case 401:
        localStorage.clear();
        window.location.href = '/';
        data.success = false;
        data.message = 'Disculpe, no está autorizado para realizar esta acción.';
        break;
      case 404:
        data.success = false;
        data.message = 'Recurso no encontrado.';
        break;
      default:
        break;
    }
    return data;
  },
);

export { BASE_URL };
export default API;
