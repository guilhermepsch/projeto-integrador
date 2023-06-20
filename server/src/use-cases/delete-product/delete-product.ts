import { ProductRepository } from "../../repositories/product-repository";
import { DeleteOrderDTO } from "../delete-order/delete-order-dto";
import { DeleteProductDTO } from "./delete-product-dto";

export class DeleteProduct {

private productRepository: ProductRepository;

constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
}

async execute(id: number): Promise<void> {
    if (!(await this.productRepository.findById(id))) {
        throw new Error('Product not found');
    }
    const product: DeleteOrderDTO = {
        id,
    };
    await this.productRepository.delete(product.id);
}
}