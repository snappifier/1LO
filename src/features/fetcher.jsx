const API_URL = import.meta.env.VITE_API_URL;

export function get(endpoint){
    console.log('API URL:', API_URL);
    return fetch(API_URL + "/api/" + endpoint).then(response => response.json());
}

export function getStrapiMedia(url) {
    return `${API_URL}${url}`;
}