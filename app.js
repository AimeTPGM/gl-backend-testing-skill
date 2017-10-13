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
app.post('/login', function (req, rest) {
  console.log('post – /login')
  dao.readUserByUsernameAndPassword(req, res)
  
})

/**
* Description: for adding a new member 
* Req: post
* Params: username, password, email
* Return: 'Inserted one member'
**/
app.post('/user/new', function (req, res) {
  console.log('post – /user/new')
  dao.createUser(req, res)

  
})

/**
* Description: gather all users' info
* Req: get
* Params: -
* Return: list of all users
**/
app.get('/users', function (req, res, next) {
  console.log('get – /users')
  dao.readAllUsers(req, res)
})

/**
* Description: gather users' info by username
* Req: get
* Params: username
* Return: list of users
**/
app.get('/user/:username', function (req, res) {
  console.log('get – /user/'+req.params.username)
  dao.readUsersByUsername(req, res)
})

/**
* Description: change a user's info by id
* Req: put
* Params: id, username, password, email
* Return: 'Changed one member'
**/
app.put('/user/changeByID', function (req, res) {
  console.log('put – /user/changeByID')
  dao.updateUser(req, res)
})

/**
* Description: delete a user by id
* Req: delete
* Params: id
* Return: 
**/
app.delete('/user/remove/:id', function (req, res) {
  console.log('delete – /user/remove/'+req.params.id)
  dao.deleteUserByID(req,res)
})


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})