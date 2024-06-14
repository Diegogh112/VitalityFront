import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Question } from '../../../models/question';
import { MatInputModule } from '@angular/material/input';
import { QuestionService } from '../../../services/question.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarquestion',
  standalone: true,
  imports: [MatTableModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './listarquestion.component.html',
  styleUrl: './listarquestion.component.css'
})
export class ListarquestionComponent implements OnInit{
  displayedColumns:string[]=['codigo','consulta','accion01','accion02',];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<Question> = new MatTableDataSource();
  constructor(private qS:QuestionService) {}
   ngOnInit(): void {
    this.qS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
    })
    this.qS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
   }
   eliminar(id: number) {
    this.qS.eliminar(id).subscribe((data) => {
      this.qS.list().subscribe((data) => {
        this.qS.setList(data);
      });
    });
  }
}