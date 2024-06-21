import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HealthObjective } from '../models/healthobjective';
import { HttpClient } from '@angular/common/http';
import { HealthObjectiveDTO } from '../models/healthobjectiveDTO';
import { ObjectiveByUsersDTO } from '../models/objectiveByUsersDTO';
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

  listid(id:number){
    return this.http.get<HealthObjective>(`${this.url}/${id}`)
  }

  update(h:HealthObjective){
    return this.http.put(this.url,h)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getHealthObjetiveByUser():Observable<HealthObjectiveDTO[]>{
    return this.http.get<HealthObjectiveDTO[]>(`${this.url}/cantidadesporUsuario`)
  }
  getObjectiveByUsers():Observable<ObjectiveByUsersDTO[]>{
    return this.http.get<ObjectiveByUsersDTO[]>(`${this.url}/Mostrar_Objetivo_Usuario`)
  }
  getHealthObjectiveBySuscribedUsers():Observable<ObjectiveByUsersDTO[]>{
    return this.http.get<ObjectiveByUsersDTO[]>(`${this.url}/Usuarios_suscritos`)
  }
}
