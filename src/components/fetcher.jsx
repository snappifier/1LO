const BASE_URL = "http://192.168.2.33/wordpress/wp-json/wp/v2/";

export function get(endpoint) {
    return fetch(BASE_URL + endpoint).then(response => response.json());
}