import { IncomingMessage, ServerResponse } from "http";

const demoController = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(202, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "This domo page" }));
};

export default demoController;
