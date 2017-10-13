# Backend Testing Skill

this project is referred to [GetLinks](https://github.com/GetLinks/Tech-Guide/tree/master/backend)

# Before Start

## first

make sure that the database is established and running on localhost:5432

If not, you may need to set your database first by using the following command:

```
$cd ~/path/to/gl-backend-testing-skill/database
$psql -f pg-setup.sql
```

or use PostgreSQL Admin -> Create new database name "users" -> Query Tool... -> use the following query

```
CREATE TABLE member (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password VARCHAR,
  email VARCHAR
);
```

you may try to insert a data to the database for checking that it's usable by the following command:

```
INSERT INTO member (username, password, email)
VALUES ('YourName', 'Whatever', 'test@email.com');
```

## second

in gl-backend-testing-skill/dao/dao.js, line 7,

please change connectionString to ```postgres://[your postgres username]:[your postgress password]@localhost:5432/users```


# How to run

```
$git clone https://github.com/AimeTPGM/gl-backend-testing-skill.git
$cd gl-backend-testing-skill
$node app.js
```

App will be running on localhost:3000

# Must Try!

use [Postman](https://www.getpostman.com/) to send a request to the app!

## Available APIs

### Register a member

POST request to ```http://localhost:3000/user/new```

request body (json)

```
{
	"username" : "John",
	"password" : "1234",
	"email" : "john.d@gmail.com"
}
```

### Login

POST request to ```http://localhost:3000/login```

request body (json)

```
{
	"username" : "John",
	"password" : "1234"
}
```

### Get all users' information

GET request to ```http://localhost:3000/users```

### Get users' information by username

GET request to ```http://localhost:3000/user/:username```

Example 
```
http://localhost:3000/user/John
http://localhost:3000/user/Aime
```

### Change a user's information by ID

PUT request to ```http://localhost:3000/user/changeByID```

request body (json)

```
{
	"id" : "1",
	"username" : "John",
	"password" : "1234",
	"email" : "doe.j@gmail.com"
}
```

### Delete a user by ID

DELETE request to ```http://localhost:3000/user/remove/:id```

Example 
```
http://localhost:3000/user/remove/1
```

# Enjoy!