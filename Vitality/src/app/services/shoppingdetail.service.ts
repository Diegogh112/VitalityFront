import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShoppingDetail } from '../models/shoppingdetail';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ShoppingdetailService {

  private url = `${base_url}/detallesCompra`
  private listaCambio = new Subject<ShoppingDetail[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<ShoppingDetail[]>(this.url);
  }

  insert(s:ShoppingDetail){
    return this.http.post(this.url,s);
  }

  setList(listaNueva:ShoppingDetail[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
}
