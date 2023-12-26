import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.json";

axios.defaults.baseURL = config.apiEndPoint;

axios.interceptors.response.use(
  (response) => {
    /*
     * Любой код состояния, находящийся в диапазоне 2xx,
     * вызывает срабатывание этой функции.
     * Здесь при необходимости можно что-нибудь сделать с ответом.
     */
    return response;
  },
  (error) => {
    /*
     * Любые коды состояния, выходящие за пределы диапазона 2xx,
     * вызывают срабатывание этой функции.
     * Здесь при необходимости можно что-нибудь сделать с ошибкой ответа.
     */

    // ошибка ожидаемая
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    // если есть ответ от сервера
    if (!expectedErrors) {
      console.log(error); // логирование ошибки
      toast.error("Что-то не так, попробуйте позже");
      // toast("Неожиданная ошибка"); // отображаем ошибку
    }

    return Promise.reject(error);
  }
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

export default httpService;
