import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ShoppingService } from '../../../services/shopping.service';
import { Shopping } from '../../../models/shopping';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarshopping',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterLink,MatButtonModule],
  templateUrl: './listarshopping.component.html',
  styleUrl: './listarshopping.component.css'
})

export class ListarshoppingComponent implements OnInit{
  displayedColumns: string[]=[
    'codigo',
    'usuario',
    'fecha',
   'total',
   'acciones',
  ];

  dataSource:MatTableDataSource <Shopping>=new MatTableDataSource();
  constructor(private sS:ShoppingService){}
  ngOnInit(): void {
      this.sS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.sS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }

  eliminar(id: number) {
    this.sS.eliminar(id).subscribe((data) => {
      this.sS.list().subscribe((data) => {
        this.sS.setList(data);
      });
    });
  }

}