// header.js
export function centralHeader(token = '') {
    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Token ${token}`;
    }

    return headers;
}
