export class Cart {
    private id: number;
    private id_clie: number;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: number,
        id_clie: number,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.id_clie = id_clie;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getId(): number{
        return this.id;
    }

    public getIdClie(): number{
        return this.id_clie;
    }

    public getCreatedAt(): Date {
		return this.createdAt;
	}

	public getUpdatedAt(): Date {
		return this.updatedAt;
	}
}
