const axios = require('axios'); 
const url = '';
const headers = {
  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MDc1ODg5LCJpYXQiOjE3MTcwNzU1ODksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjY2M2NmNzFmLTE0NmQtNGVhNi1hZTNjLTdkZGE2MzcxN2YwOSIsInN1YiI6InJ1cGFrcjMxQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiNjYzY2Y3MWYtMTQ2ZC00ZWE2LWFlM2MtN2RkYTYzNzE3ZjA5IiwiY2xpZW50U2VjcmV0IjoiQXN1aGZzcE55VVZXWU5LUSIsIm93bmVyTmFtZSI6IlIgUnVwYWsgQmFidSIsIm93bmVyRW1haWwiOiJydXBha3IzMUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyNDU1MjE3MzMwNDQifQ.EGMcIZ9QHUhxD8BsQE_geUZRL9b8FapTbo41TgxhWv0',
  'Content-Type': 'product.json',
  'Custom-Header': 'products'
};

axios.get(url, { headers: headers })
  .then(response => {
    console.log('Response data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
