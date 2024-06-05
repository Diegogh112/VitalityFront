import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SpecialityComponent } from '../speciality.component';
import { Speciality } from '../../../models/speciality';
import { SpecialityService } from '../../../services/speciality.service';

@Component({
  selector: 'app-listarspeciality',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarspeciality.component.html',
  styleUrl: './listarspeciality.component.css'
})
export class ListarspecialityComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'descripcion',
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
}
