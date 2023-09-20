import prisma from "../database/database";
import { Product } from "@prisma/client";

async function getProducts() {
  const products = await prisma.product.findMany();

  return products;
}

async function getProduct(id: number) {
  return await prisma.product.findUnique({
    where: { id }
  })
}

async function createProduct(product: Product) {
  return await prisma.product.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;