// header.js
export const baseUrl='https://conduit-api.bondaracademy.com/api';

export function centralHeader(token = '') {
    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Token ${token}`;
    }

    return {headers};

}
