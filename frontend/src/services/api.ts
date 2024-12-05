import axios from 'axios';
import { baseUrl } from './constants';

const api = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
});

api.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_SECRET_API_KEY}`;

export default api;

