import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Question } from '../../../models/question';
import { QuestionService } from '../../../services/question.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-listarquestion',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule,RouterLink,MatPaginatorModule],
  templateUrl: './listarquestion.component.html',
  styleUrl: './listarquestion.component.css',
})
export class ListarquestionComponent implements OnInit {
  displayedColumns: string[] = ['idQuestion', 'consulta','acciones'];
  dataSource: MatTableDataSource<Question> = new MatTableDataSource();
  @ViewChild(MatPaginator) Paginator!: MatPaginator;
  constructor(private qS: QuestionService) {}
  ngOnInit(): void {
    this.qS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.Paginator;
    });
    this.qS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.Paginator;
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
