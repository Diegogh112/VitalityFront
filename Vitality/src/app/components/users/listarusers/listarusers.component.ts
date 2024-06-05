import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsersService } from '../../../services/users.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarusers',
  standalone: true,
  imports: [MatTableModule,RouterLink,MatButtonModule],
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

}
