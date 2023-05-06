import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../user-repository";
import { User } from "../../entities/user";
import { CreateUserDTO } from "../../use-cases/create-user/create-user-dto";

export class PrismaUserRepository implements UserRepository {

  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create(user: CreateUserDTO): Promise<void> {
    await this.prisma.user.create({
      data: {
        user_email: user.email,
        user_secret: user.secret,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        user_email: email,
      },
    });

    if (!user) {
      return null;
    }

    return new User(
      user.user_id,
      user.user_name,
      user.user_email,
      user.user_secret,
      user.user_created_at,
      user.user_updated_at
    );
  }

}
