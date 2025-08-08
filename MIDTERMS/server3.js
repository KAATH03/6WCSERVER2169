var express = require('express');
var app = express();

app.get('/', function(req,res){
    console.log("Name, Section, Course, Address, Hobby");
    res.send('Katherine Sanchez, WD301, Web Development. Im from San Luis Pampanga. I never end my day without drinking coffee, feels like I cannot function properly without coffee :) ! And I also love watching kdrams during free time.');
})

app.post('/', function(req,res){
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST Method!');
})

app.get('/', function(req,res){
    console.log("Got a GET request for /list_user");
    res.send('This is Page Listing');
})

app.get('/ab*cd', function(req,res){
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
})

var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})