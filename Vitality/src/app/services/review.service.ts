import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Review } from '../models/review';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ReviewByUserDTO } from '../models/reviewByUserDTO';
import { TotalPunctuations } from '../models/TotalPunctuationsDTO';
import { PunctuationByUserDTO } from '../models/punctuationByUserDTO';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url = `${base_url}/resenias`
  private listaCambio = new Subject<Review[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Review[]>(this.url);
  }

  insert(r:Review){
    return this.http.post(this.url,r);
  }

  setList(listaNueva:Review[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  listid(id:number){
    return this.http.get<Review>(`${this.url}/${id}`)
  }

  update(r:Review){
    return this.http.put(this.url,r)
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCantidadCriticas(): Observable<ReviewByUserDTO[]> {
    return this.http.get<ReviewByUserDTO[]>(
      `${this.url}/cantidades`
    );
  }

  getotalPuntuation(): Observable<TotalPunctuations[]> {
    return this.http.get<TotalPunctuations[]>(
      `${this.url}/totales`
    );
  }


  
  getUsersReviewSummary():Observable<PunctuationByUserDTO[]>{
    return this.http.get<PunctuationByUserDTO[]>(`${this.url}/resumen_y_promedio_de_resenas`)
  }

}
