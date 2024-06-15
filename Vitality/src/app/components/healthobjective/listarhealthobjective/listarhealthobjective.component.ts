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
import { HealthObjective } from '../../../models/healthobjective';
import { HealthobjectiveService } from '../../../services/healthobjective.service';

@Component({
  selector: 'app-listarhealthobjective',
  standalone: true,
  imports: [MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,MatSortModule,
    MatCardModule],
  templateUrl: './listarhealthobjective.component.html',
  styleUrl: './listarhealthobjective.component.css'
})
export class ListarhealthobjectiveComponent {
  displayedColumns: string[] = [
    'codigo',
    'tipo',
    'usuario',
    'acciones',
  ];


  dataSource:MatTableDataSource<HealthObjective>=new MatTableDataSource();
  
  constructor(private hoS:HealthobjectiveService){}
  ngOnInit(): void {
      this.hoS.list().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
      this.hoS.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data)
      })
  }

  deletes(id: number) {
    this.hoS.eliminar(id).subscribe((data) => {
      this.hoS.list().subscribe((data) => {
        this.hoS.setList(data);
      });
    });
  }
}
