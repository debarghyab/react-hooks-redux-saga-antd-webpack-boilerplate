import axios from "axios";
import { authStorage } from "@utils/localstorage";
export const serverUrl = "/api";

const RestClient = axios.create({
  baseURL: "/api/",
});

const authTokenHandler = (config) => {
  if (config) {
    const authToken = authStorage.get();
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
  }
  return config;
}

RestClient.interceptors.request.use((config) => authTokenHandler(config));

RestClient.interceptors.response.use(
  (response) => {
    // ignore 2xx response
    return response;
  },
  (error) => {
    console.log("Interceptor err", error);
    if (error && error.response && error.response.status == 401) {
      authStorage.remove();
      //location.reload();
    }
    return Promise.reject(error);
  }
);





export default {
  
};
