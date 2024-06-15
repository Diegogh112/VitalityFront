import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Recommendation } from '../../../models/recommendation';
import { RecommendationService } from '../../../services/recommendation.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listarrecommendation',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink,MatButtonModule, MatFormFieldModule, CommonModule],
  templateUrl: './listarrecommendation.component.html',
  styleUrl: './listarrecommendation.component.css'
})
export class ListarrecommendationComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'descripcion',
    'usuario',
    'acciones'
  ];

  dataSource:MatTableDataSource<Recommendation>=new MatTableDataSource();
  constructor(private rS:RecommendationService){}
  ngOnInit(): void {
      this.rS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.rS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }

  eliminar(id: number) {
    this.rS.eliminar(id).subscribe((data) => {
      this.rS.list().subscribe((data) => {
        this.rS.setList(data);
      });
    });
  }

}
