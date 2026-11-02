import axios from 'axios';
const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
const absoluteBaseUrl = configuredBaseUrl.includes('://') ? configuredBaseUrl : `https://${configuredBaseUrl}`;
const baseURL = `${absoluteBaseUrl.replace(/\/$/, '')}${absoluteBaseUrl.replace(/\/$/, '').endsWith('/api') ? '' : '/api'}`;
const api = axios.create({ baseURL, timeout: 120000, headers: { 'Content-Type': 'application/json' } });
export function messageFor(error) { return error.response?.data?.error?.message || 'The server could not be reached. Check your connection and try again.'; }
export default api;
