import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SpecialityComponent } from '../speciality.component';
import { Speciality } from '../../../models/speciality';
import { SpecialityService } from '../../../services/speciality.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listarspeciality',
  standalone: true,
  imports: [MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatCardModule],
  templateUrl: './listarspeciality.component.html',
  styleUrl: './listarspeciality.component.css'
})
export class ListarspecialityComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'descripcion',
    'acciones'
  ];



  dataSource:MatTableDataSource<Speciality>=new MatTableDataSource();
  constructor(private sS:SpecialityService){}
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
