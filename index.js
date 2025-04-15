// central.js
import loginTest from './api/LogIn.js';
import getArticle from './api/GetArticle.js';
import getTags from './api/GetTags.js';
import getUser from './api/GetUser.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
    iterations: 10,
};

export default function () {
    const token = loginTest();        // 🔐 Step 1: Login and get token
    getArticle(token);               // 🔐 Step 2: Pass token to API calls
    getTags(token);
    getUser(token);
}

export function handleSummary(data) {
    return {
        "result.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}
