import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Answer } from '../models/answer';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private url = `${base_url}/Respuesta`
  private listaCambio = new Subject<Answer[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Answer[]>(this.url);
  }

  insert(a:Answer){
    return this.http.post(this.url,a);
  }

  setList(listaNueva:Answer[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  listid(id:number){
    return this.http.get<Answer>(`${this.url}/${id}`)
  }

  update(a:Answer){
    return this.http.put(this.url,a)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
