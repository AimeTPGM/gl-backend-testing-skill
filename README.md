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

# Enjoy!