import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Recommendation } from '../models/recommendation';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private url = `${base_url}/recomendaciones`
  private listaCambio = new Subject<Recommendation[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Recommendation[]>(this.url);
  }

  insert(r:Recommendation){
    return this.http.post(this.url,r);
  }

  setList(listaNueva:Recommendation[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  listid(id:number){
    return this.http.get<Recommendation>(`${this.url}/${id}`)
  }

  update(r:Recommendation){
    return this.http.put(this.url,r)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
