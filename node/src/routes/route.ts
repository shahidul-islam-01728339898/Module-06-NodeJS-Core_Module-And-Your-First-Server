import { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";
import demoController from "../controllers/demo.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url; // "/" "/products" "/courses"
  const method = req.method; // "GET" "POST"

  if (url === "/" && method === "GET") {
    //   console.log("This is root route");
    //   res.writeHead(200, { "Content-Type": "text/plaintext" });
    //   res.end("This is root route!");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "This is root route" }));
  } else if (url?.startsWith("/product")) {
    //product "GET" PUT
    productController(req, res);
  } else if (url?.startsWith("/demo")) {
    // Demo "GET"
    demoController(req, res);
  } else {
    //   console.log("This route is not define");
    //   res.writeHead(404, { "content-type": "text/plain" });
    //   res.end("This route is not defined");
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "This route is not define" }));
  }
};

export default routeHandler;
