import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Review } from '../models/review';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
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
}
