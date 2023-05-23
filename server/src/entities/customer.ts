export class Customer {
   private id_customer: number;
   private age: number;
   private created_at: Date;
   private updated_at: Date;


   constructor(
      id_customer: number,
      age: number,
      created_at: Date,
      updated_at: Date
   ) {
      this.id_customer = id_customer;
      this.age = age;
      this.created_at = created_at;
      this.updated_at = updated_at;
   }

   public getIdCustomer(): number {
      return this.id_customer;
   }

   public getAge(): number {
      return this.age;
   }

   public setAge(age: number) {
      this.age = age;
   }

   public getCreatedAt(): Date {
      return this.created_at;
   }

   public setCreatedAt(created_at: Date) {
      this.created_at = created_at;
   }

   public getUpdatedAt(): Date {
      return this.updated_at;
   }

   public setUpdatedAt(updated_at: Date) {
      this.updated_at = updated_at;
   }
}

export type CustomerDTO = {
   id_customer: number,
   age: number,
   created_at: Date,
   updated_at: Date
}