import { PrismaClient } from "@prisma/client";
import { CartRepository } from "../cart-repository";
import { CreateCartDTO } from "../../use-cases/create-cart/create-cart-dto";
import { Cart } from "../../entities/cart";
import { UpdateCartDTO } from "../../use-cases/update-cart/update-cart-dto";

export class PrismaCartRepository implements CartRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create(cart: CreateCartDTO): Promise<void> {
    await this.prisma.cart.create({
      data: {
        clie_id: cart.id_clie,
      },
    });
  }

  async read(): Promise<Cart[]> {
    const carts = await this.prisma.cart.findMany();
    return carts.map(
      (cart: {
        cart_id: number;
        clie_id: number;
        created_at: Date;
        updated_at: Date;
      }) =>
        new Cart(cart.cart_id, cart.clie_id, cart.created_at, cart.updated_at)
    );
  }

  async update(cart: UpdateCartDTO): Promise<Cart> {
    const updatedCart = await this.prisma.cart.update({
      where: {
        cart_id: cart.id,
      },
      data: {
        clie_id: cart.clie_id,
      },
    });
    return new Cart(
      updatedCart.cart_id,
      updatedCart.clie_id,
      updatedCart.created_at,
      updatedCart.updated_at
    );
  }

  async delete(id: number): Promise<void> {
    await this.prisma.cart.delete({
      where: {
        cart_id: id,
      },
    });
  }
}
