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
// we created home.ejs which contains our simple html code
// this is read by express as JS as interpreted by EJS, but rendered as HTML

app.listen(3000, () => {
  console.log('Listening on port 3000');
})