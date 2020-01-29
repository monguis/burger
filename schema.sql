DROP DATABASE IF EXISTS burguers_db;

CREATE DATABASE burguers_db;

USE burguers_db;

CREATE TABLe burguers(
id INT AUTO_INCREMENT PRIMARY KEY,
burguer_name VARCHAR(100),
devoured BOOL
);