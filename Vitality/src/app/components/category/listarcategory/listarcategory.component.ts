import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-listarcategory',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarcategory.component.html',
  styleUrl: './listarcategory.component.css'
})
export class ListarcategoryComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'descripcion',
  ];



  dataSource:MatTableDataSource<Category>=new MatTableDataSource();
  constructor(private cS:CategoryService){}
  ngOnInit(): void {
      this.cS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.cS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }
}
