import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-listarproduct',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarproduct.component.html',
  styleUrl: './listarproduct.component.css'
})
export class ListarproductComponent {
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'precio',
    'stock',
    'categoria',
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
}
