import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Review } from '../../../models/review';
import { ReviewService } from '../../../services/review.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarreview',
  standalone: true,
  imports: [
    MatTableModule,
  RouterLink,
  MatButtonModule,MatIconModule
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
   'acciones',
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
  deletes(id: number) {
    this.rS.eliminar(id).subscribe((data) => {
      this.rS.list().subscribe((data) => {
        this.rS.setList(data);
      });
    });
  }
}