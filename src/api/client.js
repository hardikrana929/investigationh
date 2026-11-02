import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api', timeout: 120000, headers: { 'Content-Type': 'application/json' } });
export function messageFor(error) { return error.response?.data?.error?.message || 'The server could not be reached. Check your connection and try again.'; }
export default api;
