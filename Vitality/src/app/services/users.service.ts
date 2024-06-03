import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = `${base_url}/usuarios`
  private listaCambio = new Subject<Users[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Users[]>(this.url);
  }

  insert(h:Users){
    return this.http.post(this.url,h);
  }

  setList(listaNueva:Users[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
}
