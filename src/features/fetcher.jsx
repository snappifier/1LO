const API_URL = import.meta.env.VITE_API_URL;

export function get(endpoint){
    return fetch(API_URL + "/api/" + endpoint).then(response => response.json());
}

export function getStrapiMedia(url) {
    if (url !== undefined) {
        return `${API_URL}${url}`;
    }
}