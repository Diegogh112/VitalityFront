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
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<HealthObjective[]>(this.url);
  }

  insert(h:HealthObjective){
    return this.http.post(this.url,h);
  }

  setList(listaNueva:HealthObjective[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
}
