import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Question } from '../models/question';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url = `${base_url}/preguntas`
  private listaCambio = new Subject<Question[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Question[]>(this.url);
  }

  insert(q:Question){
    return this.http.post(this.url,q);
  }

  setList(listaNueva:Question[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
}
