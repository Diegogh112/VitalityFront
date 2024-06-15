import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Monitoring } from '../models/monitoring';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  private url = `${base_url}/seguimiento`
  private listaCambio = new Subject<Monitoring[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Monitoring[]>(this.url);
  }

  insert(m:Monitoring){
    return this.http.post(this.url,m);
  }

  setList(listaNueva:Monitoring[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  listid(id:number){
    return this.http.get<Monitoring>(`${this.url}/${id}`)
  }

  update(m:Monitoring){
    return this.http.put(this.url,m)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
