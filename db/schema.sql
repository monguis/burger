DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLe burgers(
id INT AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(100),
devoured BOOL DEFAULT FALSE
);


