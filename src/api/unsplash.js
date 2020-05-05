import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5a7042b6d582efadcbfa3c279bfb0b3301bdc45dfb49a5ed633f061ada29e43a',
  }
});