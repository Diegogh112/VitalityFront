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
    return this.http.get<Users[]>(this.url+"/listarusuarios");
  }

  //para insertar

  insert(u:Users){
    return this.http.post(this.url,u);
  }

  setList(listaNueva:Users[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  
  }

  //para modificar
  listid(id:number){
    return this.http.get<Users>(`${this.url}/${id}`)
  }

  update(u:Users){
    return this.http.put(this.url,u)
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
