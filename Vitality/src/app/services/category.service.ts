import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { CountShoppingDTO } from '../models/countShoppingDTO';
=======
import { ProductsByCategoryDTO } from '../models/productsByCategoryDTO';
>>>>>>> 7eb1b8d682f3967fd38d73871cf342d0c3f009fb
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = `${base_url}/categorias`
  private listaCambio = new Subject<Category[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Category[]>(this.url);
  }

  insert(c:Category){
    return this.http.post(this.url,c);
  }

  setList(listaNueva:Category[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listid(id:number){
    return this.http.get<Category>(`${this.url}/${id}`)
  }

  update(c:Category){
    return this.http.put(this.url,c)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
<<<<<<< HEAD

  findTotalShoppingAmountToDate():Observable<CountShoppingDTO[]>{
    return this.http.get<CountShoppingDTO[]>(`${this.url}/compras_totales`)
=======
  getSumProductsByType(type:string):Observable<ProductsByCategoryDTO[]>{
    return this.http.get<ProductsByCategoryDTO[]>(`${this.url}/Totalproductoscompradosportipo`,{
      params:{type}
    })
>>>>>>> 7eb1b8d682f3967fd38d73871cf342d0c3f009fb
  }
}
