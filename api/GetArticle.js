import http from 'k6/http';
import { sleep } from 'k6';
import { centralHeader} from "../config/header.js";

export default function ()
    {
        const url = 'https://conduit-api.bondaracademy.com/api/articles';

        const res = http.get(url, { headers:centralHeader() });
        console.log(res.body);
    }
