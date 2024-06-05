import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Question } from '../../../models/question';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-listarquestion',
  standalone: true,
  imports: [MatTableModule
  ],
  templateUrl: './listarquestion.component.html',
  styleUrl: './listarquestion.component.css'
})
export class ListarquestionComponent implements OnInit{
  displayedColumns:string[]=['idQuestion','consulta'];
  dataSource: MatTableDataSource<Question> = new MatTableDataSource();
  constructor(private qS:QuestionService) {}
   ngOnInit(): void {
    this.qS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data)
    })
    this.qS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
   }
}
