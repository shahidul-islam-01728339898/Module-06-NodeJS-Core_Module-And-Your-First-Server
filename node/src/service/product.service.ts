import path from "node:path";

const filePath = path.join(process.cwd(), "./src/database/db.json");

const productService = () => {
  //   console.log(process.cwd());
  console.log(filePath);
};

export default productService;
