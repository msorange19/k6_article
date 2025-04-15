// api/GetUser.js
import http from 'k6/http';
import { check } from 'k6';
import { baseUrl, centralHeader } from "../config/header.js";

export default function getUser(token) {
    const res = http.get(baseUrl + '/user', {
        headers: centralHeader(token).headers,
    });
console.log(res);
    const user = res.json('user');
    console.log(`👤 Username: ${user.username}`);
    check(res, {
        '✅ status is 200': (r) => r.status === 200,
        '✅ correct username': () => user.username === 'testuser350',
    });
}
