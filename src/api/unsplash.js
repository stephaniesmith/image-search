import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3ea301576b1e083528debe121ae9774d8d4747b92df7ffccc86a2c8f85736fca'
  }
});
