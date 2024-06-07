import { Component, OnInit } from '@angular/core';
import { Role } from '../../../models/role';
import { RoleService } from '../../../services/role.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listarrole',
  standalone: true,
  imports: [MatTableModule,
    MatIconModule,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './listarrole.component.html',
  styleUrl: './listarrole.component.css'
})
export class ListarroleComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'usuario',
    'acciones'
  ];

  dataSource:MatTableDataSource<Role>=new MatTableDataSource();
  constructor(private rS:RoleService){}
  ngOnInit(): void {
      this.rS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.rS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }

  eliminar(id: number) {
    this.rS.eliminar(id).subscribe((data) => {
      this.rS.list().subscribe((data) => {
        this.rS.setList(data);
      });
    });
  }

}
