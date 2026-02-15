import axios from 'axios';
const API_KEY = '54645800-ce9a454a278ea89e94662f70a';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,

    });
      return axios.get(BASE_URL, { params }).then(response => {
        return response.data;
        });
}




















