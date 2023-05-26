import { CartRepository } from "../../repositories/cart-repository";
import { CreateCartDTO } from "./create-cart-dto";

export type CreateCartRequest = {
    id_clie: number;
}

export class CreateCart {
    private cartRepository: CartRepository;

    constructor(cartRepository: CartRepository){
        this.cartRepository = cartRepository;
    }

    async execute ({id_clie}: CreateCartRequest){
        if (await this.cartRepository.findByClientId(id_clie)) {
            throw new Error('Cart already exists');
        }
        const cart: CreateCartDTO = {
            id_clie
        };
        await this.cartRepository.create(cart);
    }
}