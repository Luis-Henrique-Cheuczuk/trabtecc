import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.224:3000/', //Casa
  //baseURL: 'http://192.168.0.119:3000/', //Prude
  //baseURL: 'http://192.168.0.105:3000/', //Lets
});

export default api;