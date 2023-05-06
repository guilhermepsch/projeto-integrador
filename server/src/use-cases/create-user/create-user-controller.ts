import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateUser } from "./create-user";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";

export class UserController {

  private createUser: CreateUser;

  constructor() {
    this.createUser = new CreateUser(
      new PrismaUserRepository(new PrismaClient())
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, secret } = req.body;
    await this.createUser.execute({ name, email, secret });
    return res.status(201).send();
  }

}