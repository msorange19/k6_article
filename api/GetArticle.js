import http from 'k6/http';
import { check, sleep } from 'k6';
import { baseUrl,centralHeader } from "../config/header.js";

export default function () {
    //const url = 'https://conduit-api.bondaracademy.com/api/articles';
    const res = http.get(baseUrl+'/articles', { headers: centralHeader() });

    const articles = res.json('articles');

    check(res, {
        'is status 200': (r) => r.status === 200,
        'is slug present in all articles': () =>
            articles.every((article) => article.hasOwnProperty('slug')),

    });
}
