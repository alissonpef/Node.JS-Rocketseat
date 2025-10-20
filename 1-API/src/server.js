import http from "node:http"

const server = http.createServer(async (req, res) => {
    const { method, url } = req // const method = req.method;

    if (method === "GET" && url === "/products") {
        return res.end("Lista de Produtos!")
    }

    if (method === "POST" && url === "/products") {
        const buffers = []

        for await (const chunk of req) {
            buffers.push(chunk)
        }
        console.log(buffers)
        console.log(Buffer.concat(buffers).toString())

        return res.writeHead(201).end("Produto cadastrado!")
    }

    return res.writeHead(404).end("Rota não encontrada!") 
})

server.listen(8080)