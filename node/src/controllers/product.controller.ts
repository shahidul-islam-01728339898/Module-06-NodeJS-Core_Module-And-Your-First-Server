import { IncomingMessage, METHODS, ServerResponse } from "http";
import productService from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  //
  const url = req.url;
  const method = req.method;

  if (url === "/product" && method === "GET") {
    const products = [
      {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        age: 25,
        city: "New York",
        isActive: true,
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@example.com",
        age: 28,
        city: "London",
        isActive: true,
      },
      {
        id: 3,
        name: "Michael Brown",
        email: "michael@example.com",
        age: 32,
        city: "Toronto",
        isActive: false,
      },
      {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        age: 24,
        city: "Sydney",
        isActive: true,
      },
      {
        id: 5,
        name: "David Wilson",
        email: "david@example.com",
        age: 30,
        city: "Dhaka",
        isActive: false,
      },
    ];

    productService();

    res.writeHead(202, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Retrive successfully!",
        data: products,
        // data: productService,
      }),
    );
  }
};

export default productController;
