const express = require('express');
const hbs = require('hbs');
let  app = express();
const request = require('request');
const port = process.env.PORT || 8000;
console.log(port);
app.set('view engine', 'hbs');

app.use(express.static(__dirname ));
hbs.registerPartials(__dirname + '/views')
hbs.registerHelper('toUpper', (text) => {
return text.toUpperCase();
})

// request('https://in.bookmyshow.com/thrissur/movies/odiyan/ET00055418', (err, res, body) => {
//   if(err) {
//     console.log(err)
//   }
// console.log('dsf', res);
// })

app.use((req, res, next) => {
  console.log('hiiii');
  next();
})

app.get('/', (req, res) => {
  res.render('about', {
    title: 'rag=hul'
  });
})

app.get('/bad', (req, res) => {
  res.sendFile('playground/help.html', {root: __dirname});
})

app.listen(port, ()=> {
  console.log('listening');
})