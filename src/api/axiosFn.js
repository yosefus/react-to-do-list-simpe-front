import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const exeptedErorr = error.request && error.request.status >= 400 && error.request.status < 500;
  if (!exeptedErorr) toast('something went wrong');
  return Promise.reject(error);
});

// const baseUrl = 'http://localhost:4001/api/';
const baseUrl = 'https://todoliist-api-yosefus.herokuapp.com/api/';

const axiosFn = async ({ _method: method, _url: url, _data: dataBody }) => {
  const { data } = await axios({
    method: method,
    url: baseUrl + url,
    data: dataBody,
  });

  return data;
};

axios.defaults.headers.Authorization = localStorage?.token;

export default axiosFn;
