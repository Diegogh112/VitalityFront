import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Answer } from '../../../models/answer';
import { AnswerService } from '../../../services/answer.service';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listaranswer',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink,MatButtonModule, MatFormFieldModule, CommonModule],
  templateUrl: './listaranswer.component.html',
  styleUrl: './listaranswer.component.css'
})
export class ListaranswerComponent {
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'usuario',
    'acciones'
  ];

  dataSource:MatTableDataSource<Answer>=new MatTableDataSource();
  constructor(private aS:AnswerService){}
  ngOnInit(): void {
      this.aS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.aS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }



  eliminar(id: number) {
    this.aS.eliminar(id).subscribe((data) => {
      this.aS.list().subscribe((data) => {
        this.aS.setList(data);
      });
    });
  }
}
