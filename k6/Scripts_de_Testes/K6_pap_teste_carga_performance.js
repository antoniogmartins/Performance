//Autor: Antonio Goncalves Martins
//Ferramena: K6
//Este script de testes de performance/carga foi criado para servir de base de conhecimento e aperfeiçoamento
//e poder compartilhar com outros profissioais da area, para que se sintam incentivadas a automatizar os testes manuais

import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomString,uuidv4, urlencode } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';
// import urlencode from 'https://jslib.k6.io/form-urlencoded/3.0.0/index.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

let res_get, res_post = '';

const url  = 'https://restful-booker.herokuapp.com/booking';
 
  export const options = {
    insecureSkipTLSVerify: true,
  
  stages: [
    { duration: '5s', target: 30 },
    { duration: '10s', target: 50 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 20 },
    { duration: '10s', target: 50 },
    { duration: '5s', target: 0 },
  ],
  
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<1000'], // 95 percent of response times must be below 1000ms
  },
};

export default function () {
   // testando
   const randomUUID = uuidv4(6);
    
   const params = {
     headers: {
       'content-type': 'application/json',
       'accept': 'aplication/json'
     },
   };

   res_get = http.get(url,params);

   console.log('================================================================================================='); 
   console.log('======== GET: RESPONSE ======='); 
   console.log(res_get.body);  
   check(res_get, { 
        'Retornando o status Code 200: sucesso': (res_get) => res_get.status === 200,
        'Ta retornando no body do get a informacao: bookingid: sucesso': (res_get) => res_get.body.includes ('bookingid'),
        });
   sleep(0.3);
  
  
 //   let payload = {firstname: randomUUID+'@empresa.com.br', lastname: 'Martins', totalprice: 200, depositpaid: true, bookingdates: {checkin: '2023-09-11', checkout: '2023-09-12'}, additionalneeds: 'Launch' };
 
   
   let payload = {firstname: `${randomString(10)}@empresa.com.br`, lastname: 'Martins', totalprice: 200, depositpaid: true, bookingdates: {checkin: '2023-09-11', checkout: '2023-09-12'}, additionalneeds: 'Launch' };
 
   res_post = http.post(url, JSON.stringify(payload),{
    headers: {'Content-Type':'application/json','Accept':'application/json'},
    });

   console.log('==================================================================================================='); 
   console.log('======== POST: RESPONSE ======='); 
   console.log(res_post.body);
   console.log(res_post.status);
   console.log('response: ',res_post.json());  
   check(res_post, {      
      'Retornando o status Code 200: sucesso': (res_post) => res_post.status === 200,
      'Ta retornando no cordpo do response a informacao bookingid: sucesso': (res_post) => res_post.body.includes('bookingid'),
      });
 
  sleep(0.3);
}  
  export function handleSummary(data) {
  return {
    "resumo.html": htmlReport(data),
  };

}

