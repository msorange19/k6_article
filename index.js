import http from 'k6/http';
import { sleep } from 'k6';
import loginTest from './api/LogIn.js'
import getArticle from './api/GetArticle.js';

export const options = {
    iterations: 10,
};

export default function () {
   loginTest();
   getArticle()
}
