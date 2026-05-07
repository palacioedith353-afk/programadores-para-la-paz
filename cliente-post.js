const http = require('http');

const data = JSON.stringify({
  mensaje: 'Hola servidor'
});

const opciones = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(opciones, res => {

  res.on('data', d => {
    process.stdout.write(d);
  });

});

req.write(data);
req.end();const http = require('http');
const http = require('http');

const data = JSON.stringify({
  mensaje: 'Hola servidor'
});

const opciones = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(opciones, res => {

  res.on('data', d => {
    process.stdout.write(d);
  });

});

req.write(data);
req.end();const http = require('http');

const data = JSON.stringify({
  nombre: "Estudiante",
  mensaje: "Hola servidor"
});

const opciones = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(opciones, res => {
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.write(data);
req.end();
