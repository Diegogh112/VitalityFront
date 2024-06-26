import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsersService } from '../../../services/users.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-listarusers',
  standalone: true,
  imports: [MatTableModule,RouterLink,MatButtonModule,MatIconModule,MatPaginatorModule],
  templateUrl: './listarusers.component.html',
  styleUrl: './listarusers.component.css'
})
export class ListarusersComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'correo',
    'contrasenia',
    'direccion',
    'peso',
    'altura',
    'suscripcion',
    'esprofesional',
    'acciones',
  ];

  dataSource:MatTableDataSource<Users>=new MatTableDataSource();
  constructor(private uS:UsersService){}
  ngOnInit(): void {
      this.uS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.uS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }

  deletes(id: number) {
    this.uS.delete(id).subscribe((data) => {
      this.uS.list().subscribe((data) => {
        this.uS.setList(data);
      });
    });
  }

}
