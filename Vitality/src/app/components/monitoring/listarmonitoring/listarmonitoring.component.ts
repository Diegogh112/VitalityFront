import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Monitoring } from '../../../models/monitoring';
import { MonitoringService } from '../../../services/monitoring.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-listarmonitoring',
  standalone: true,
  imports: [MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,MatSortModule,
    MatCardModule],
  templateUrl: './listarmonitoring.component.html',
  styleUrl: './listarmonitoring.component.css'
})
export class ListarmonitoringComponent {
  displayedColumns: string[] = [
    'codigo',
    'fechainicio',
    'fechafin',
    'estado',
    'historial',
    'plan',
    'objetivo',
    'acciones',
  ];


  dataSource:MatTableDataSource<Monitoring>=new MatTableDataSource();
  @ViewChild(MatPaginator) Paginator!: MatPaginator;
  constructor(private mS:MonitoringService){}
  ngOnInit(): void {
      this.mS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.Paginator;
      })
      this.mS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.Paginator;
      })
  }

  deletes(id: number) {
    this.mS.eliminar(id).subscribe((data) => {
      this.mS.list().subscribe((data) => {
        this.mS.setList(data);
      });
    });
  }
}
