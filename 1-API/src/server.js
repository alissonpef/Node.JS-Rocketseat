import http from "node:http"

const server = http.createServer((req, res) => {
    const { method } = req // const method = req.method;
    return res.end("Método: " + method) 
})

server.listen(8080)