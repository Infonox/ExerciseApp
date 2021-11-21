const API_ROOT = 'http://localhost:8081/';

export function api(url){
    return fetch(API_ROOT + url).then(x=> x.json())
} 