import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Speciality } from '../models/speciality';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  private url = `${base_url}/especialidades`
  private listaCambio = new Subject<Speciality[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Speciality[]>(this.url);
  }

  insert(s:Speciality){
    return this.http.post(this.url,s);
  }

  setList(listaNueva:Speciality[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listid(id:number){
    return this.http.get<Speciality>(`${this.url}/${id}`)
  }

  update(s:Speciality){
    return this.http.put(this.url,s)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
