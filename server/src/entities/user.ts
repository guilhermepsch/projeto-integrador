export class User {
  private name: string;
  private email: string;
  private secret: string;
  private isSuperUser: boolean;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(name: string, email: string, secret: string) {
    this.name = name;
    this.email = email;
    this.secret = secret;
    this.isSuperUser = false;
    const startingDate = new Date();
    this.createdAt = startingDate;
    this.updatedAt = startingDate;
  }

  public get getName(): string {
    return this.name;
  }

  public set setName(name: string) {
    this.name = name;
  }

  public get getEmail(): string {
    return this.email;
  }

  public set setEmail(email: string) {
    this.email = email;
  }

  public get getSecret(): string {
    return this.secret;
  }

  public get getIsSuperUser(): boolean {
    return this.isSuperUser;
  }

  public get getCreatedAt(): Date {
    return this.createdAt;
  }

  public get getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public setUpdatedAt() {
    this.updatedAt = new Date();
  }
}