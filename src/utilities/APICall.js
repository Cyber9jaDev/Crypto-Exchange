import { useState } from "react";

const baseUrl = 'https://api.coinranking.com/v2/';
const cors_api_host = "https://corsanywhere.herokuapp.com/";
const key = 'coinranking64cde228d1852cd27131b0dba9371a17bc09d58764fbe1ae';

const headers =  {
    method: 'GET',
    headers: {
      'x-access-token': `${key}`,
  }
}

// const checkResponseAndParse = (response) => {
//   if(!response.ok) throw new Error(response.status);
//   return response.json();
// }

// export async function createRequest(endpoint, setData){
//   fetch(`${cors_api_host}${baseUrl}${endpoint}`, headers)
//   .then(checkResponseAndParse)
//   .then(data => setData(data.data.coins))
//   .catch  (err => new Error(`Error: ${err}`));
// };

export async function createRequest(endpoint){
  try {
    const response = await fetch(`${cors_api_host}${baseUrl}${endpoint}`, headers); 
    const data =  await response.json();
  }
  catch(err){
    return new Error(`Error: ${err}`)
  }
};







