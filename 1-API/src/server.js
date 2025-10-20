import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req; // const method = req.method;

  await jsonBodyHandler(req, res);

  if (method === "GET" && url === "/products") {
    return res.end("Lista de Produtos!");
  }

  if (method === "POST" && url === "/products") {
    // Ele vai dar erro se colocar req.body, pois o req retorna strings e nṹmeros, porém, ele printa apenas strings
    // Caso queira printar um tipo númerico especifico, daria para fazer req.body.price.toString()
    return res.writeHead(201).end(JSON.stringify(req.body));
  }

  return res.writeHead(404).end("Rota não encontrada!");
});

server.listen(8080);
