import axios from 'axios';

import { API_URL } from '@constants/api';

const baseFetch = axios.create({
  baseURL: API_URL,
});

export default baseFetch;
