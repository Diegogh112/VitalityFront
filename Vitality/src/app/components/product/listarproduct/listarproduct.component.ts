import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-listarproduct',
  standalone: true,
  imports: [MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,MatSortModule,
    MatCardModule],
  templateUrl: './listarproduct.component.html',
  styleUrl: './listarproduct.component.css'
})
export class ListarproductComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'precio',
    'stock',
    'categoria',
    'acciones',
  ];


  dataSource:MatTableDataSource<Product>=new MatTableDataSource();
  
  constructor(private pS:ProductService){}
  ngOnInit(): void {
      this.pS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.pS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }

  deletes(id: number) {
    this.pS.delete(id).subscribe((data) => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
      });
    });
  }
}
