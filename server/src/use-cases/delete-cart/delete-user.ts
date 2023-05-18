import { CartRepository } from "../../repositories/cart-repository";
import { DeleteCartDTO } from "./delete-cart-dto";

export class DeleteCart {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository) {
        this.cartRepository = cartRepository;
    }

    async execute(id: number): Promise<void> {
        const cart: DeleteCartDTO = {
            id,
        };
        await this.cartRepository.delete(cart.id);
    }
    
}