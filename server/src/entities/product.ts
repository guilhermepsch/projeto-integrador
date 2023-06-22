export class Product{
  private prod_id: number;
  private prod_name: string;
  private prod_price: number;
  private prod_img: string;
  private cata_id: number;
  private prod_desc: string;



  
  constructor(
    id: number,
    name: string,
    price: number,
    img: string,
    cata_id: number,
    prod_desc: string,
  ) {
    this.prod_id = id;
    this.prod_name = name;
    this.prod_price = price;
    this.cata_id = cata_id;
    this.prod_desc = prod_desc;
    this.prod_img = img;
  }

  public getId(): number {
    return this.prod_id;
  }

  public setName(name: string): void {
    this.prod_name = name;
  }

  public setPrice(price: number): void {
    this.prod_price = price;
  }

  public setImg(img: string): void {
    this.prod_img = img;
  }


  public getDesc(): string {
    return this.prod_desc;
  }

  public setDesc(desc: string): void {
    this.prod_desc = desc;
  }

  public getCataId(): number {
    return this.cata_id;
  }

  public setCataId(cata_id: number): void {
    this.cata_id = cata_id;
  }

  public getName(): string {
    return this.prod_name;
  }

  public getPrice(): number {
    return this.prod_price;
  }

  public getImg(): string {
    return this.prod_img;
  }

  
}