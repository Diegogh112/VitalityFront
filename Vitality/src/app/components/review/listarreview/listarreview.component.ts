import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Review } from '../../../models/review';
import { ReviewService } from '../../../services/review.service';

@Component({
  selector: 'app-listarreview',
  standalone: true,
  imports: [
    MatTableModule,
  RouterLink,
  MatButtonModule
],
  templateUrl: './listarreview.component.html',
  styleUrl: './listarreview.component.css'
})
export class ListarreviewComponent implements OnInit{
  displayedColumns: string[]=[
    'codigo',
    'puntuacion',
    'comentario',
   'usuario',
  ];

  dataSource:MatTableDataSource <Review>=new MatTableDataSource();
  constructor(private rS:ReviewService){}
  ngOnInit(): void {
      this.rS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.rS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }
}