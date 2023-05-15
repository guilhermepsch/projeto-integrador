import { Cart } from '../entities/cart';
import { CreateCartDTO } from '../use-cases/create-cart/create-cart-dto';
import { UpdateCartDTO } from '../use-cases/update-cart/update-cart-dto';

export interface CartRepository {
    create(cart: CreateCartDTO): Promise<void>;
    read(): Promise<Cart[]>;
    update(cart: UpdateCartDTO): Promise<Cart>;
    delete(id: number): Promise<void>;
}