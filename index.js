import http from 'http';
import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(401, { 'Content-Type': 'text/html' });
    res.write('<h1>Method not allowed</h1>');
    res.end();
  } else if (req.url === '/') {
    const pathToFile = path.join(__dirname, 'pages', 'index.html');
    fs.readFile(pathToFile, (error, data) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/about') {
    const pathToFile = path.join(__dirname, 'pages', 'about.html');
    fs.readFile(pathToFile, (error, data) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/contact-me') {
    const pathToFile = path.join(__dirname, 'pages', 'contact-me.html');
    fs.readFile(pathToFile, (error, data) => {
      if (error) throw error;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else {
    const pathToFile = path.join(__dirname, 'pages', '404.html');
    fs.readFile(pathToFile, (error, data) => {
      if (error) throw error;
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080);
