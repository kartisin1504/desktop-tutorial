const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

instance.defaults.timeout = '3000';

export default instance;
