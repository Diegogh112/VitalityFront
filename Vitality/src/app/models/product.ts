import { Category } from "./category"

export class Product {
    idProduct:number=0
    name:string=''
    price:number=0
    stock:number=0
    category:Category = new Category();
}