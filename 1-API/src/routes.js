import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (req, res) => {
      console.log(req.query);
      return res.end(JSON.stringify(req.query));
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (req, res) => {
      return res.writeHead(201).end(JSON.stringify(req.body));
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: (req, res) => {
      return res
        .writeHead(201)
        .end("Produto removido com ID: " + req.params.id);
    },
  },
].map((route) => ({
  ...route, // Copia todas as propriedades do objeto 'route' original, basicamente um path: route.path
  path: parseRoutePath(route.path),
}));
