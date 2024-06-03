import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Shopping } from '../models/shopping';
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
}
