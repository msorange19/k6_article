import http from 'k6/http';
import { sleep } from 'k6';
import { centralHeader} from "../config/header.js";
export  default function(){

    const url = 'https://conduit-api.bondaracademy.com/api/users/login';

    const payload = JSON.stringify({
        user: {
            email: 'testuser350@mail.com',
            password: 'password123',
        },
    });

    const res = http.post(url, payload, { headers:centralHeader() });

    console.log(res.body); // Optional: log response body
    sleep(1);
}