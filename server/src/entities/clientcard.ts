export class ClientCard {
    private id: number;
    private cvv: string;
    private cardholder: string;
    private expirationDate: string;
    private cpf: string;
    private cardnumber: string;
    private created_at: Date;
    private updated_at: Date;

    constructor(
        id: number,
        cvv: string,
        cardholder: string,
        expirationDate: string,
        cpf: string,
        cardnumber: string,
        created_at: Date,
        updated_at: Date
    ){
        this.id = id;
        this.cvv = cvv;
        this.expirationDate = expirationDate
        this.cardholder = cardholder;
        this.cpf = cpf;
        this.cardnumber = cardnumber;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    getId(): number {
        return this.id;
    }

    getCvv(): string {
        return this.cvv;
    }

    setCvv(cvv: string) {
        this.cvv = cvv;
    }

    getExpirationDate(): string {
        return this.expirationDate;
    }

    setExpirationDate(expirationDate: string) {
        this.expirationDate = expirationDate;
    }

    getCardholder(): string {
        return this.cardholder;
    }

    setCardholder(cardholder: string) {
        this.cardholder = cardholder;
    }

    getCpf(): string {
        return this.cpf;
    }

    setCpf(cpf: string) {
        this.cpf = cpf;
    }
    getCardnumber(): string {
        return this.cardnumber;
    }

    getCreatedAt(): Date {
        return this.created_at;
    }

    setCreatedAt(created_at: Date) {
        this.created_at = created_at;
    }

    getUpdatedAt(): Date {
        return this.updated_at;
    }

    setUpdatedAt(updated_at: Date) {
        this.updated_at = updated_at;
    }
}

export type CardDTO = {
    id: number,
    cvv: string,
    expirationDate: string,
    cardholder: string,
    cpf: string,
    cardnumber: string,
    created_at: Date,
    updated_at: Date
}