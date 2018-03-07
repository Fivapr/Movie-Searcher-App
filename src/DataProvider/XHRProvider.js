import { gcf } from "./config";
import axios from "axios";

let instance = null;

export default class XHRProvider {
  constructor() {
    if (instance !== null) {
      return instance;
    }
  }

  requestApi = (path, params) =>
    axios
      .get(`${gcf.url}${path}`, {
        params: {
          api_key: gcf.api_key,
          ...params
        }
      })
      .then(response => response.data)
      .catch(error => {
        console.log(error);
      });
}
