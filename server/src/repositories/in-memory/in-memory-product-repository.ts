import { Product } from "../../entities/product";
import { ProductRepository } from "../product-repository";
import { CreateProductDTO } from "../../use-cases/create-product/create-product-dto";
import { UpdateProductDTO } from "../../use-cases/update-product/update-product-dto";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  constructor(products: Product[] = []){
    this.products = products;
}
  findAll(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  async read(): Promise<Product[]> {
    return this.products;

  }

  async create(product: CreateProductDTO){
    const newProduct = new Product(
      this.products.length + 1,
      product.description,
      product.name,
      product.price,
      product.photo,
      product.catalogueId,
    );
    this.products.push(newProduct);
  }

  async update(updateProduct: UpdateProductDTO): Promise<Product> {
    const productIndex = this.products.findIndex((product) => product.getId() === updateProduct.id);
    const product = this.products[productIndex];
    const updatedProduct = new Product(
      product.getId(),
      updateProduct.description,
      updateProduct.name,
      updateProduct.price,
      updateProduct.photo,
      updateProduct.catalogueId,
    );
    this.products[productIndex] = updatedProduct;
    return updatedProduct;


  }
  
 async delete(id: number): Promise<void> {
    const productIndex = this.products.findIndex((product) => product.getId() === id);
    if (productIndex === -1) throw new Error('Product not found');
    this.products.splice(productIndex, 1);
  }

  async findByName(name: string): Promise<Product | null> {
    const productExist = this.products.find((product) => product.getName() === name);
    if (!productExist) {
      return null;
    }
    return productExist;

  }
   async findById(id: number): Promise<Product | null> {
    const prodcut = this.products.find(product => product.getId() === id);
    if (!prodcut){
      return null;
    }
    return prodcut
  }
  }
  


  
