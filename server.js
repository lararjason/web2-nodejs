const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.resolve('./public')));
app.set('view engine', 'ejs');


app.get('/', function(req,res){
   res.render('index')
});

app.listen(process.env.PORT || 3000, function(){
   console.log('server, port 3000');
});
