var dotenv = require('dotenv')
dotenv.config() //read in .env file and parse it

//main entry point into API
var express = require('express')
var app = express()
// var imgur = require('./imgur')
var fivehundred = require('./fivehundred')

// app.post('/test/', function(request, response) {
//   var kittenPic = 'mbgq7nd';
//   imgur.getInfo(kittenPic)
//       .then(function(picture) {
//           // console.log(json);
//           response.json(picture)
//       })
//       .catch(function (err) {
//           console.error(err.message);
//       });
// })

// app.get('/test/', function(req, res) {
//   var kittenPic = 'mbgq7nd';
//   imgur.getInfo(kittenPic)
//       .then(function(picture) {
//           // console.log(json);
//           // res.send('hello')
//           // res.json(picture)
//           // res.send(picture)
//           var url = picture.data.link;
//           var html = `<img src=${url} />`;
//           res.send(html);
//       })
//       .catch(function (err) {
//           console.error(err.message);
//       });
//
// })

//popular images
app.get('/image/popular', function(request, response) {
  fivehundred.getPopular(function(object) {
    // response.json(object)
    var html = '';
    object.forEach(function(element) {
      var url = element.imgurl;
      var imghtml = `<img src=${url} />`;
      html += imghtml
      var name = element.name;
    })
    response.send(html)
  })
})

//image search
app.get('/image/:q', function(request, response) {
  fivehundred.search(request.params.q, function(object) {
    // response.json(object)
    var html = '';
    object.forEach(function(element) {
      var url = element.imgurl;
      var imghtml = `<img src=${url} />`;
      html += imghtml
      var name = element.name;
    })
    response.send(html)
  })
})

app.listen(3000)
