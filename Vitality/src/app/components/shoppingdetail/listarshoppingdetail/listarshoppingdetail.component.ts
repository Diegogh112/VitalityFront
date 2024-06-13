import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ShoppingDetail } from '../../../models/shoppingdetail';
import { ShoppingdetailService } from '../../../services/shoppingdetail.service';

@Component({
  selector: 'app-listarshoppingdetail',
  standalone: true,
  imports: [MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,MatSortModule,
    MatCardModule],
  templateUrl: './listarshoppingdetail.component.html',
  styleUrl: './listarshoppingdetail.component.css'
})
export class ListarshoppingdetailComponent {
  displayedColumns: string[] = [
    'codigo',
    'cantidad',
    'subtotal',
    'producto',
    'compra',
    'acciones',
  ];


  dataSource:MatTableDataSource<ShoppingDetail>=new MatTableDataSource();
  
  constructor(private sdS:ShoppingdetailService){}
  ngOnInit(): void {
      this.sdS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.sdS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }

  deletes(id: number) {
    this.sdS.eliminar(id).subscribe((data) => {
      this.sdS.list().subscribe((data) => {
        this.sdS.setList(data);
      });
    });
  }
}
