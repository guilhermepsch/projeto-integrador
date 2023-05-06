export class User {
  private id: number;
  private name: string;
  private email: string;
  private secret: string;
  private createdAt: Date;
  private updatedAt: Date;

constructor (id: number, name: string, email: string, secret: string, createdAt: Date, updatedAt: Date) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.secret = secret;
  this.createdAt = createdAt;
  this.updatedAt = updatedAt;
}

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getSecret(): string {
    return this.secret;
  }

  public setSecret(secret: string) {
    this.secret = secret;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

}