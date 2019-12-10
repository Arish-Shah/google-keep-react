import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://keep-react.firebaseio.com/',
});

export default instance;
