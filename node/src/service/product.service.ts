import fs from "fs";
import path from "node:path";
import { Iproduct } from "../types/product";

//for building connection with database; database path
const filePath = path.join(process.cwd(), "./src/database/db.json");

export const productService = () => {
  //   console.log(process.cwd());
  // console.log(filePath);
  const result = fs.readFileSync(filePath, "utf-8");
  // console.log(result.toString);
  // console.log(result);
  // return result;
  return JSON.parse(result);
};

export const createProduct = (payLoad: Iproduct[]) => {
  fs.writeFileSync(filePath, JSON.stringify(payLoad));
};
