export function parseRoutePath(path) {
  // Pega o que vem em /:id
  const routeParametersRegex = /:([a-zA-Z]+)/g;

  const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)");
  // Objeto
  const pathRegex = new RegExp(params);

  return pathRegex;
}
