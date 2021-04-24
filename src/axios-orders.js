import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-c338b-default-rtdb.firebaseio.com/'
});

export default instance;