import { Component, OnInit, ViewChild } from '@angular/core';
import { Users } from '../../../models/users';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsersService } from '../../../services/users.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listarusers',
  standalone: true,
  imports: [
    MatTableModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './listarusers.component.html',
  styleUrl: './listarusers.component.css',
})
export class ListarusersComponent implements OnInit {
  users:Users[]=[];

  dataSource: MatTableDataSource<Users> = new MatTableDataSource();
  constructor(private uS: UsersService) {}
  ngOnInit(): void {
    this.uS.list().subscribe(
      (data) => {
        this.users = data;
      })
    this.uS.getList().subscribe(
        (data) => {
          this.users = data;
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
