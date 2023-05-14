import { CartRepository } from "../../repositories/cart-repository";
import { CreateCartDTO } from "./create-cart-dto";

interface CreateCartRequest {
    id_clie: number;
}

export class CreateCart {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository){
        this.cartRepository = cartRepository;
    }

    async execute ({id_clie}: CreateCartRequest): Promise<void> {
        const cart: CreateCartDTO = {
            id_clie
        };
        await this.cartRepository.create(cart);
    }
}