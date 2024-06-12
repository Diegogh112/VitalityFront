import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listarproduct',
  standalone: true,
  imports: [MatTableModule,RouterLink,MatIconModule],
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
