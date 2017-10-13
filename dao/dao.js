const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pg = require('pg')
const pgp = require('pg-promise')(options);
const connectionString = 'postgres://postgres:12345@localhost:5432/users'
const db = pgp(connectionString);

exports.readUsersByUsername = function(req, res){
  var username = req.params.username;
  db.any('SELECT * FROM member WHERE username=\''+username+'\'')
  .then(function(data){
    res.send(data)
  })
  .catch(function (err) {
    res.status(404).send('404 Not Found')
  })
  
}

exports.readAllUsers = function(req, res){
  db.any('SELECT * FROM member')
  .then(function(data){
    res.send(data)
  })
  .catch(function (err) {
    res.status(404).send();
  })
}

exports.updateUser = function(req, res){
  var id = req.body.id
  var username = req.body.username
  var password = req.body.password
  var email = req.body.email
  db.none('UPDATE member ' +
          'SET username=\''+username+'\', '+
              'password=\''+password+'\', '+
              'email=\''+email+'\' '+
          ' WHERE id=\''+id+'\';')
  .then(function () {
    res.status(200).send('Changed one member')
  })
  .catch(function (err) {
     res.status(400).send('400 Bad Request')
  })
}

exports.createUser = function(req, res){
  var username = req.body.username
  var password = req.body.password
  var email = req.body.email
  db.none('INSERT INTO member (username, password, email)' +
    'VALUES (\''+username+'\', \''+password+'\', \''+email+'\');')
  .then(function () {
    res.status(200).send('Inserted one member')
  })
  .catch(function (err) {
    res.status(400).send('400 Bad Request')
  })
}

exports.readUserByUsernameAndPassword = function(req, res){
  var username = req.body.username
  var password = req.body.password
  db.any('SELECT * FROM member WHERE username=\''+username+'\' AND password=\''+password+'\';')
  .then(function(data){
    if(data.length == 0) res.status(400).send(false)
    else res.send(true)
  })
  .catch(function (err) {
    res.status(400).send(false)
  })
}

exports.deleteUserByID = function(req, res){
  var id = req.params.id
  db.result('DELETE FROM member WHERE id='+id+';')
  .then(function (result) {
    res.send(result)
  })
  .catch(function (err) {
    res.status(400).send()
  });
}