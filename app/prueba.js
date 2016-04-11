/**
* Module dependencies.
*/

var express = require('express');
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view options', {
layout: false
});
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Routes

app.get('/',function(req,res){
res.render("index",{
title: "01 - basic express ",
banner: "Hello from template!"
});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
