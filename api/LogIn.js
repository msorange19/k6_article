// api/LogIn.js
import http from 'k6/http';
import { baseUrl, centralHeader } from "../config/header.js";

export default function loginTest() {
    const payload = JSON.stringify({
        user: {
            email: 'testuser350@mail.com',
            password: 'password123',
        },
    });

    const res = http.post(baseUrl + '/users/login', payload, {
        headers: centralHeader().headers,
    });

    const token = res.json('user.token');
    console.log(`✅ Token: ${token}`);
    return token;
}
