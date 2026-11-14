import { IncomingMessage, METHODS, ServerResponse } from "http";
import productService from "../service/product.service";
import { Iproduct } from "../types/product";
import { bodyParser } from "../utils/parseBody";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
  //
  const url = req.url;
  const method = req.method;
  // console.log(url) -> /products/1
  const urlParams = url?.split("/");
  // console.log(urlParams); [ '', 'product', '1' ]
  const id =
    urlParams && urlParams[1] === "product" ? Number(urlParams[2]) : null;
  console.log(id);

  //To Get All Product
  if (url === "/product" && method === "GET") {
    // const products = [
    //   {
    //     id: 1,
    //     name: "John Smith",
    //     email: "john@example.com",
    //     age: 25,
    //     city: "New York",
    //     isActive: true,
    //   },
    //   {
    //     id: 2,
    //     name: "Sarah Johnson",
    //     email: "sarah@example.com",
    //     age: 28,
    //     city: "London",
    //     isActive: true,
    //   },
    //   {
    //     id: 3,
    //     name: "Michael Brown",
    //     email: "michael@example.com",
    //     age: 32,
    //     city: "Toronto",
    //     isActive: false,
    //   },
    //   {
    //     id: 4,
    //     name: "Emily Davis",
    //     email: "emily@example.com",
    //     age: 24,
    //     city: "Sydney",
    //     isActive: true,
    //   },
    //   {
    //     id: 5,
    //     name: "David Wilson",
    //     email: "david@example.com",
    //     age: 30,
    //     city: "Dhaka",
    //     isActive: false,
    //   },
    // ];

    const products = productService();
    res.writeHead(202, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Retrive successfully!",
        data: products,
        // data: productService,
      }),
    );
  } else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p: Iproduct) => p.id == id);
    res.writeHead(202, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Single Product Are Retriving",
        data: product,
      }),
    );
    //* To Create Product Post Post =201
  } else if (method === "POST" && url === "/product") {
    const body = await bodyParser(req);
    console.log(body);
    res.writeHead(201, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Created Successfully",
        // data: product,
      }),
    );
  }

  // else {
  //   res.writeHead(404, { "content-type": "application/json" });
  //   res.end(JSON.stringify({ message: "This route is not define" }));
  // }
};

export default productController;
