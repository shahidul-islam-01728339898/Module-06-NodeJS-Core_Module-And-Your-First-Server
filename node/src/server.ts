import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(req);
});

server.listen(3000, () => {
  console.log("Server is running using request receiving");
});
