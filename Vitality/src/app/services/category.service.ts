import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
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
}
