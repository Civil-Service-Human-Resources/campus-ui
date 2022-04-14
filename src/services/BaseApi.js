import axios from 'axios';

class BaseApi {
  constructor(baseUrl) {
    if (!baseUrl) {
      throw new Error('BASE_URL REQUIRED!');
    }

    this.baseURL = baseUrl;

    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // this.instance.interceptors.request.use((config) => {});
    this.instance.interceptors.response.use((response) => {
      return response.data;
    });
  }

  /**
   *
   * @param {AxiosConfig} options
   * @returns
   */
  callApi(options) {
    const { method, ...rest } = options;
    const reqMethod = method || 'GET';

    return this.instance({ method: reqMethod, ...rest });
  }
}

export default BaseApi;

export const client = new BaseApi(process.env.REACT_APP_API);
