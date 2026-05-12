# Node Auth Image App

## Database SQL
CREATE DATABASE spectra;
USE spectra;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('user','admin') DEFAULT 'user'
);

CREATE TABLE images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image LONGBLOB,
  uploaded_by INT
);

## Run
npm install
node server.js
