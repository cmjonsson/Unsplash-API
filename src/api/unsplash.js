import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8ff6765e04227cb484b73d049a0b5abc9cfa19cb0fffd06c4b9a3bc53b0f97a0'
  }
});