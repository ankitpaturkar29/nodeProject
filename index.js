// import express from 'express';
const express = require('express');
const app = express();
const port = 3000;
// const sqlite3 = require(sqlite3).verbose(); 

app.use(express);

app.get('/', (req, res) => {
  res.send('get all users!');
  prepare();
});


app.listen(3000, () => {
  console.log(`app listening at http://localhost:${port}`);
});
// console.log("hello got it")