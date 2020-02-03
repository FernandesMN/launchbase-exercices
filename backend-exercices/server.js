const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

const description = require('./data-description');
const courses = require('./data-courses');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
});

server.get('/', function(req,res) {
    return res.render("courses", {courses});
});

server.get('/about', function(req,res) {
    return res.render("about", {description});
});

server.use(function(req,res) {
    res.status(404).render('not-found');
});

server.listen(5000, function() {
    console.log('server is running...');
});