import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateUser } from "./create-user";
import { InMemoryUserRepository } from "../../repositories/in-memory/in-memory-user-repository";

export class CreateUserController {

  private createUser: CreateUser;

  constructor() {
    this.createUser = new CreateUser(
      new InMemoryUserRepository()
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, secret } = req.body;
    await this.createUser.execute({ name, email, secret });
    return res.status(201).send();
  }

}