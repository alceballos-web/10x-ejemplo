const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const file = path.join(__dirname, "index.html");
    fs.readFile(file, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Error al leer index.html");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("No encontrado");
  }
});

server.listen(PORT, () => {
  console.log(`Abre en el navegador: http://localhost:${PORT}`);
});
