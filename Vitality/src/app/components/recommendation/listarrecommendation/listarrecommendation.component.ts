import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Recommendation } from '../../../models/recommendation';
import { RecommendationService } from '../../../services/recommendation.service';

@Component({
  selector: 'app-listarrecommendation',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarrecommendation.component.html',
  styleUrl: './listarrecommendation.component.css'
})
export class ListarrecommendationComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'descripcion',
    'usuario',
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

}
