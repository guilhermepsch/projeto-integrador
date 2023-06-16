export class Item{
  private id : number
  private id_product : number 
  private id_cart : number | null

  constructor(id_item : number, id_product : number, id_cart : number|null){
    this.id = id_item
    this.id_product = id_product
    this.id_cart = id_cart
  }

  public getId() : number{
    return this.id
  }

  public getId_product() : number{
    return this.id_product
  }

  public getId_cart() : number | null{
    return this.id_cart
  }
}

export type ItemDTO = {
  id : number
  id_product : number
  id_cart : number | null
}
