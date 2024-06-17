import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HealthObjective } from '../../../models/healthobjective';
import { MatInputModule } from '@angular/material/input';
import { HealthobjectiveService } from '../../../services/healthobjective.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-listarhealthobjective',
  standalone: true,
  imports: [MatTableModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './listarhealthobjective.component.html',
  styleUrl: './listarhealthobjective.component.css'
})
export class ListarhealthobjectiveComponent implements OnInit {
  displayedColumns:string[]=['codigo','tipo','user','accion01','accion02',];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<HealthObjective> = new MatTableDataSource();
  constructor(private hS:HealthobjectiveService) {}
   ngOnInit(): void {
    this.hS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
    })
    this.hS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
   }
   eliminar(id: number) {
    this.hS.eliminar(id).subscribe((data) => {
      this.hS.list().subscribe((data) => {
        this.hS.setList(data);
      });
    });
  }
}
