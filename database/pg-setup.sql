DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

\c users;

CREATE TABLE member (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password VARCHAR,
  email VARCHAR
);