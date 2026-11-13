import { createServer, IncomingMessage, ServerResponse, Server } from "http";
import { json } from "stream/consumers";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    //   console.log("Request", req);
    //   console.log("Response: ", res);
    // console.log(req.url);
    // console.log(req.method);
    const url = req.url; // "/" "/products" "/courses"
    const method = req.method; // "GET" "POST"

    if (url === "/" && method === "GET") {
      //   console.log("This is root route");
      //   res.writeHead(200, { "Content-Type": "text/plaintext" });
      //   res.end("This is root route!");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "This is root route" }));
    } else if (url?.startsWith("/product")) {
      res.writeHead(202, { "Content-type": "application/json" });
      res.end(JSON.stringify({ message: "This is product page" }));
    } else {
      //   console.log("This route is not define");
      //   res.writeHead(404, { "content-type": "text/plain" });
      //   res.end("This route is not defined");
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "This route is not define" }));
    }
  },
);

server.listen(5000, () => {
  console.log("Server is running using request receiving");
});
