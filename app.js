const express = require('express');
// test CI/CD pipline
// wuth githubactionsxy
const app = express();
const Port = 3000;
app.get('/', (req, res)=>{
res.send("hello from docker");
});
app.get('/tasks', (req, res)=>{
res.json([
{id:1, name: "on dockerise cette app"},
{id:2, name: "on utilise githup actions pour ci/cd"}
]);
});
app.listen(Port, ()=>{
console.log("app ecoute dans le port 3000");
});
