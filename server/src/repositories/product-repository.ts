import {Product} from "../entities/product";
import { CreateProductDTO } from '../use-cases/create-product/create-product-dto';
import { UpdateProductDTO } from "../use-cases/update-product/update-product-dto";


export interface ProductRepository {
  create (product: CreateProductDTO): Promise<void>;
  update (updateProduct: UpdateProductDTO): Promise<Product>;
  delete (id: number): Promise<void>;
  read(): Promise<Product[]>;
  findByName (name: string): Promise< Product | null>;
  findById (id: number): Promise< Product | null>;
  findAll (): Promise< Product[]>;
}
