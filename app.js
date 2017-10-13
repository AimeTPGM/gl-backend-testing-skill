const express = require('express')
const bodyParser = require('body-parser')
const dao = require('./dao/dao')
const app = express()

app.use(bodyParser.json())

/**
* Description: for login by username and password
* Req: post
* Params: username, password
* Return: 'Correct username and password'
**/
app.post('/login', function (req, res) {
  console.log('post – /login')
  res.send()
})

/**
* Description: for adding a new member 
* Req: post
* Params: username, password, email
* Return: 'Inserted one member'
**/
app.post('/user/new', function (req, res) {
  console.log('post – /user/new')
  res.send()
})

/**
* Description: gather all users' info
* Req: get
* Params: -
* Return: list of all users
**/
app.get('/users', function (req, res, next) {
  console.log('get – /users')
  res.send()
})

/**
* Description: gather users' info by username
* Req: get
* Params: username
* Return: list of users
**/
app.get('/user/:username', function (req, res) {
  console.log('get – /user/'+req.params.username)
  res.send()
})

/**
* Description: change a user's info by id
* Req: put
* Params: id, username, password, email
* Return: 'Changed one member'
**/
app.put('/user/changeByID', function (req, res) {
  console.log('put – /user/changeByID')
  res.send()
})


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})