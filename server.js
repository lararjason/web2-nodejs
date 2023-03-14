const express = require('express');
const app = express();
const db = require('./connection');

const path = require('path');
const upload = require('./upload');
app.use(express.static(path.resolve('./public')));
app.set('view engine', 'ejs');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const postRoutes = require('./routes/post');
app.use('/p', postRoutes);

var obj = {};


app.get('/', function(req,res){
   let sql = 'SELECT * FROM posts ORDER BY date DESC';
   db.query(sql, function(err, results){
       if(err) {
           throw err;
       } else {
           obj = {data: results};
           res.render('index', obj)
       }
   });
});

app.listen(process.env.PORT || 3000, function(){
   console.log('server, port 3000');
});
