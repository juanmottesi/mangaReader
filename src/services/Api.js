import axios from 'axios';
import Auth from './Auth';

const ip = 'http://localhost:3004';

const post = (path, data) => (
  axios.post(`${ip}/${path}`, data)
    .then(response => response.data)
);

const saveUser = user => Auth.saveUser(user);

export default {
  login: data => post('auth', data).then(saveUser),
};
