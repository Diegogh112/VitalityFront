import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HealthObjective } from '../models/healthobjective';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class HealthobjectiveService {
  private url = `${base_url}/Objetivo-de-salud`
  private listaCambio = new Subject<HealthObjective[]>();
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<HealthObjective[]>(this.url);
  }

  insert(h:HealthObjective){
    return this.httpClient.post(this.url,h);
  }

  listId(id: number) {
    return this.httpClient.get<HealthObjective[]>(`${this.url}/${id}`);
  }

  update(c: HealthObjective) {
    return this.httpClient.put(this.url, c);
  }

  eliminar(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }


  setList(listaNueva:HealthObjective[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listid(id:number){
    return this.http.get<HealthObjective>(`${this.url}/${id}`)
  }

  update(h:HealthObjective){
    return this.http.put(this.url,h)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
