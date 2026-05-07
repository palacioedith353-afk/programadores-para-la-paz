const http = require('http');

const servidor = http.createServer((req, res) => {

  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Respuesta GET del servidor');
  }

  else if (req.method === 'POST') {

    let cuerpo = '';

    req.on('data', chunk => {
      cuerpo += chunk.toString();
    });

    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Datos recibidos: ' + cuerpo);
    });
  }

});

servidor.listen(3000, () => {
  console.log('Servidor funcionando en puerto 3000');
});
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.write('Servidor funcionando con GET');
    res.end();
  }

  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      res.write('Datos recibidos: ' + body);
      res.end();
    });
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

