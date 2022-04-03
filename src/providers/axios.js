import axiosBase from 'axios';
import AppConfig from '../AppConfig';

const axios = () => axiosBase.create({
  baseURL: `${AppConfig.endpoint}api/`,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export default axios;
