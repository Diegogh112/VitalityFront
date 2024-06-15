import { Product } from "./product"
import { Shopping } from "./shopping"

export class ShoppingDetail {
    idShoppingDetail:number=0
    quantityShoppingDetail:number=0
    subtotalShoppingDetail:number=0
    product:Product=new Product()
    shopping:Shopping= new Shopping()
}