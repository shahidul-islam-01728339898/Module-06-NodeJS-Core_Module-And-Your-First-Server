import { IncomingMessage, ServerResponse } from "http";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(202, { "Content-type": "application/json" });
  res.end(JSON.stringify({ message: "This is product page" }));
};

export default productController;
