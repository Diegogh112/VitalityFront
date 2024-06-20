

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Shopping } from '../models/shopping';
import { ShoppingDTO } from '../models/shoppingDTO';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private url = `${base_url}/compras`
  private listaCambio = new Subject<Shopping[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Shopping[]>(this.url);
  }

  insert(s:Shopping){
    return this.http.post(this.url,s);
  }

  setList(listaNueva:Shopping[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  listid(id:number){
    return this.http.get<Shopping>(`${this.url}/${id}`)
  }

  update(s:Shopping){
    return this.http.put(this.url,s)
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getQuantityByShopping():Observable<ShoppingDTO[]>{
    return this.http.get<ShoppingDTO[]>(`${this.url}/cantidadesdecompras`)
  }
}
