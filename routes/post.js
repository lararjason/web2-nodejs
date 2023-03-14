const express = require("express");
const router = express.Router();
const upload = require('./../upload');
const db = require('./../connection');


router.post('/', upload.single('img'), function(req,res){
    const title = req.body.title;
    const url = title.replaceAll(' ', '-').toLowerCase();
    console.log(url);
    const text = req.body.text;
    const img = "/uploads/" + req.file.filename;
    const sqlInstert = "INSERT INTO posts (url, title, text, img) VALUES (?, ?, ?, ?);"
    db.query(sqlInstert, [url, title, text, img], (err, result)=> {
        if(err) {
            throw err;
        } else {
            res.send ('posted');
        }
    });
 });

 router.get('/', function(req,res){
    res.render('post')
 });
 
 router.get('/:id', function(req,res){
    let sql = 'select *from posts where url IN('+req.params.id+')';
    db.query(sql, function(err, results){
        if(err) {
            throw err;
        } else {
            obj = {data: results};
            console.log(obj.data.length)
            if (obj.data == '') {
                res.render('404')
            } else{
           // res.send(obj)
                res.render('single', obj)
            }
        }
    });
 });
 

 module.exports = router;