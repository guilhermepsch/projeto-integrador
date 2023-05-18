import { Request, Response } from 'express';
import { ReadCatalogue } from './read-catalogue';
import { PrismaCatalogueRepository } from '../../repositories/prisma/prisma-catalogue-repository';
import { PrismaClient } from '@prisma/client';
import { InMemoryCatalogueRepository } from '../../repositories/in-memory/in-memory-catalogue-repository';

export type ReadListRequest = {
	page: number;
	limit: number;
	range: number;
	order: string;
	direction: string;
};

export class ReadCatalogueController{
	private readCatalogue: ReadCatalogue;

	constructor() {
		this.readCatalogue = new ReadCatalogue(
      new InMemoryCatalogueRepository()
		);
	}

	async read(req: Request, res: Response): Promise<Response> {
		try {
			const catalogues = await this.readCatalogue.execute();
			return res.status(200).json(catalogues);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
}
