import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_WEB_PORT,
  withCredentials: true,
});

export const signup = (user) => {
  return axios({
    method: 'POST',
    url: 'signup',
    data: qs.stringify(user),
  }).then((response) => {
    setUser(response.data);
  });
};

export const login = (user) => {
  return axios({
    method: 'POST',
    url: 'login',
    data: qs.stringify(user),
  }).then((response) => {
    setUser(response.data);
  });
};

export const logout = (user) => {
  return axios.delete('logout').then((response) => {
    clearUser('user');
  });
};

export const setUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user));
};
export const getUser = (user) => {
  return JSON.parse(window.localStorage.getItem('user'));
};

export const clearUser = (user) => {
  window.localStorage.clear('user');
};
