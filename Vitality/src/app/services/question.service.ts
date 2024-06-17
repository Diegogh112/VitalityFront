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
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Question[]>(this.url);
  }

  insert(q:Question){
    return this.httpClient.post(this.url,q);
  }

  listId(id: number) {
    return this.httpClient.get<Question>(`${this.url}/${id}`);
  }

  update(c: Question) {
    return this.httpClient.put(this.url, c);
  }

  eliminar(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  setList(listaNueva:Question[]) {
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
<<<<<<< HEAD

=======
>>>>>>> origin/maria
}
