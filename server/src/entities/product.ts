export class Product{
  private id: number;
  private name: string;
  private description: string;
  private price: number;
  private photo: string;
  private catalogueId: number;

 constructor(id: number, name: string, description: string, price: number, photo:string , catalogueId: number) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.price = price;
  this.photo = photo;
  this.catalogueId = catalogueId;
}
public getId(){
  return this.id;
}
public getName(){
  return this.name;
}
public setName(name: string){
  this.name = name;
}
public getDescription(){
  return this.description;
}
public setDescription(description: string){
  this.description = description;
}
public getPrice(){
  return this.price;
}
public setPrice(price: number){
  this.price = price;
}
public getPhoto(){
  return this.photo;
}
public setPhoto(photo: string){
  this.photo = photo;
}
public getCatalogueId(){
  return this.catalogueId;

}

}



