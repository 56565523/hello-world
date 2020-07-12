

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "aamir",
  password: "test",
  database: "mydb"
});
var express = require('express');
var app = express();
var fs = require("fs");
var obj
var name;
var address;



var sql = 'SELECT * FROM school';
// Display all users
app.get('/school/getSchoolList', (request, response) => {
    con.query(sql, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

app.get('/school/getSchoolById/:id', (request, response) => {
  const id = request.params.id;
  console.log("id value is" +id);
  con.query('SELECT * FROM School WHERE school_id = ?', id, (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});


app.delete('/school/deleteSchoolById/:id', (request, response) => {
  const id = request.params.id;
  con.query('delete FROM school WHERE school_id = ?', id, (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});


app.get('/school/getSchoolByName/:name', (request, response) => {
  const name = request.params.name;
  console.log("name value is : " +name);
  con.query('SELECT * FROM school WHERE school_name = ?', name, (error, result) => {
      if (error) throw error;

      response.send(result);
  });
});




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});