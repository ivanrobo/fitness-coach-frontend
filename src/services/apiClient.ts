import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // The base URL of our Quarkus backend
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;
