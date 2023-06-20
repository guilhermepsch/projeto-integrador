import { PrismaClient } from "@prisma/client";
import { ProductRepository } from "../product-repository";
import { Product } from "../../entities/product";
import { CreateProductDTO } from "../../use-cases/create-product/create-product-dto";
import { UpdateProductDTO } from "../../use-cases/update-product/update-product-dto";




export class PrismaProductRepository implements ProductRepository{
  
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
      this.prisma = prisma;
  }
 async delete(id: number): Promise<void> {
    await this.prisma.product.delete({
      where: {
        prod_id: id,
      },
    });
    
}
  async findById(id: number): Promise<Product | null> {

    const product = await this.prisma.product.findFirst({
      where: {
        prod_id: id,
      },
    });
    
    if (!product) {
        return null;
    }

    return new Product(
        product.prod_id, 
        product.prod_name,
        product.prod_price,
        product.prod_image,
        product.cata_id,
        product.prod_description,
    );
  }
  async update(product: UpdateProductDTO): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
      where: {
        prod_id: product.id,
      },
      data: {
        prod_name: product.name,
        prod_price: product.price,
        prod_image: product.img,
        cata_id: product.cata_id,
        prod_description: product.prod_desc,
      },
    });
    return new Product(
      updatedProduct.prod_id,
      updatedProduct.prod_name,
      updatedProduct.prod_price,
      updatedProduct.prod_image,
      updatedProduct.cata_id,
      updatedProduct.prod_description,
    );
  }
  async read(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products.map(product => new Product(
      product.prod_id, 
      product.prod_name,
      product.prod_price,
      product.prod_image,
      product.cata_id,
      product.prod_description,
    ));
  }
  async create(product: CreateProductDTO): Promise<void> {
    await this.prisma.product.create({
      data: {
        prod_name: product.name,
        prod_price: product.price,
        prod_image: product.img,
        cata_id: product.cata_id,
        prod_description: product.prod_desc,
      }
    })


  }
  async findByName(name: string): Promise<Product | null> {
    const product = await this.prisma.product.findFirst({
      where: {
        prod_name: name,
      },
    });
    
    if (!product) {
        return null;
    }

    return new Product(
        product.prod_id, 
        product.prod_name,
        product.prod_price,
        product.prod_image,
        product.cata_id,
        product.prod_description,
    );
  }

}