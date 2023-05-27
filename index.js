const express = require('express');
const app = express();
const path = require('path');
// since index.js can be run outside its working directory using nodemon,
// this will cause an error. we will use express' module - path, to resolve this

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
// the module path has a '.join' method, which uses the __dirname param to link
// index.js to the /views directory where our .ejs template is

app.get('/', (request,response) => {
  response.render('home');
})
// we created home.ejs which contains our simple HTML code (.ejs can also be omitted)
// EJS can render JavaScript code into HTML, but in our case, the template is already on HTML

app.get('/rand', (request, response) => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  response.render('random', {rand: randNum});
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})