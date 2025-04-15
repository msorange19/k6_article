import {baseUrl, centralHeader} from "../config/header.js";
import http from 'k6/http';
import { check, sleep } from 'k6';

export default function()
{console.log(centralHeader());

    const res = http.get(baseUrl+'/tags',{headers:centralHeader()});
    const tags = res.json('tags');

check(res,{
    'is status 200': (r)=>r.status === 200,
    'is tag available': ()=>Array.isArray(tags)
})
}