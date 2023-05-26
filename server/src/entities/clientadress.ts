export class ClientAdress {
    private id: number;
    private street: string;
    private other: string;
    private cep: string;
    private state: string;
    private city: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(
        id: number,
        street: string,
        other: string,
        cep: string,
        state: string,
        city: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.street = street;
        this.other = other;
        this.cep = cep;
        this.state = state;
        this.city = city;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public getId(): number {
        return this.id;
    }

    public getStreet(): string {
        return this.street;
    }

    public setStreet(street: string) {
        this.street = street;
    }

    public getOther(): string {
        return this.other;
    }

    public setOther(other: string) {
        this.other = other;
    }

    public getCep(): string {
        return this.cep;
    }

    public setCep(cep: string) {
        this.cep = cep;
    }

    public getState(): string {
        return this.state;
    }

    public setState(state: string) {
        this.state = state;
    }

    public getCity(): string {
        return this.city;
    }

    public setCity(city: string) {
        this.city = city;
    }
}

export type ClientAdressDTO = {
    id: number,
    street: string,
    other: string,
    cep: string,
    state: string,
    city: string,
    createdAt: Date,
    updatedAt: Date
}