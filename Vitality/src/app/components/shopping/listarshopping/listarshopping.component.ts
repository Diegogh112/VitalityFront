import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ShoppingService } from '../../../services/shopping.service';
import { Shopping } from '../../../models/shopping';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-listarshopping',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterLink,MatButtonModule,MatPaginatorModule],
  templateUrl: './listarshopping.component.html',
  styleUrl: './listarshopping.component.css'
})

export class ListarshoppingComponent implements OnInit{
  displayedColumns: string[]=[
    'codigo',
    'fecha',
    'usuario',
   'total',
   'acciones',
  ];

  dataSource:MatTableDataSource <Shopping>=new MatTableDataSource();
  @ViewChild(MatPaginator) Paginator!: MatPaginator;
  constructor(private sS:ShoppingService){}
  ngOnInit(): void {
      this.sS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.Paginator;
      })
      this.sS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.Paginator;
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