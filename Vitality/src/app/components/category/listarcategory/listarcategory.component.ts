import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-listarcategory',
  standalone: true,
  imports: [ MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,MatSortModule,
    MatCardModule],
  templateUrl: './listarcategory.component.html',
  styleUrl: './listarcategory.component.css'
})
export class ListarcategoryComponent implements OnInit{
  sortedData:Category[]=[];
  dataSource: MatTableDataSource<Category> = new MatTableDataSource();

  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'descripcion',
    'acciones'
  ];

  @ViewChild(MatPaginator) Paginator!: MatPaginator;

  constructor(private cS:CategoryService){}
  ngOnInit(): void {
      this.cS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.Paginator;
      })
      this.cS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.Paginator;
      })
  }

  eliminar(id: number) {
    this.cS.eliminar(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
  }

}
