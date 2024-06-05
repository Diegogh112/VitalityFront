import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from '../models/product';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${base_url}/productos`
  private listaCambio = new Subject<Product[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Product[]>(this.url);
  }

  insert(p:Product){
    return this.http.post(this.url,p);
  }

  setList(listaNueva:Product[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listid(id:number){
    return this.http.get<Product>(`${this.url}/${id}`)
  }

  update(p:Product){
    return this.http.put(this.url,p)
  }
}
