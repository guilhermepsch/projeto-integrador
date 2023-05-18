import { PrismaClient } from '@prisma/client';
import { ProductRepository } from '../product-repository';
import { Product } from '../../entities/product';
import { CreateProductDTO } from '../../use-cases/create-product/create-product-dto';
import { UpdateProductDTO } from '../../use-cases/update-product/update-product-dto';

export class PrismaProductRepository implements ProductRepository {
private prisma: PrismaClient;
constructor(prisma: PrismaClient) {
this.prisma = prisma;
}
  async read(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products.map(
      (product: {
        prod_id: number;
        prod_name: string;
        prod_description: string;
        prod_price: number;
        prod_image: string;
        cata_id: number;
        created_at: Date;
        updated_at: Date;
      }) =>
        new Product(
          product.prod_id,
          product.prod_name,
          product.prod_description,
          product.prod_price,
          product.prod_image,
          product.cata_id,
        ),
    );
  }

 async create(product: CreateProductDTO): Promise<void> {
  if(await this.findByName(product.name)){
    throw new Error('Product already exists');
  }
 await this.prisma.product.create({
  data: {
    prod_name: product.name,
    prod_price: product.price,
    prod_description: product.description,
    prod_image: product.photo,
    cata_id: product.catalogueId,
    created_at: new Date(),
    updated_at: new Date()
  },
});

  }
 async update(updateProduct: UpdateProductDTO): Promise<Product> {

  const updatedProduct = await this.prisma.product.update({
    where: {
      prod_id: updateProduct.id,
    },
    data: {
      prod_name: updateProduct.name,
      prod_description: updateProduct.description,
      prod_price: updateProduct.price,
      prod_image: updateProduct.photo,
      cata_id: updateProduct.catalogueId,
    },
  });
  return new Product(
    updatedProduct.prod_id,
    updatedProduct.prod_name,
    updatedProduct.prod_description,
    updatedProduct.prod_price,
    updatedProduct.prod_image,
    updatedProduct.cata_id,
  );

  

  }
  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({
      where: {
        prod_id: id,
      },
    });
  }

  async findByName(name: string): Promise <Product | null> {
  const productExist = await this.prisma.product.findFirst({
    where: {
      prod_name: name,
    },
  });
  if (!productExist) {
    return null;
  }
  return new Product(
    productExist.prod_id,
    productExist.prod_name,
    productExist.prod_description,
    productExist.prod_price,
    productExist.prod_image,
    productExist.cata_id,
  );

}

  async findById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
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
      product.prod_description,
      product.prod_price,
      product.prod_image,
      product.cata_id,
    );

  }
  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products.map(
      (product: {
        prod_id: number;
        prod_name: string;
        prod_description: string;
        prod_price: number;
        prod_image: string;
        cata_id: number;
        created_at: Date;
        updated_at: Date;
      }) =>
        new Product(
          product.prod_id,
          product.prod_name,
          product.prod_description,
          product.prod_price,
          product.prod_image,
          product.cata_id,
        ),
    );

  }


}