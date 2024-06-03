import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarquestionComponent } from './listarquestion/listarquestion.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [RouterOutlet,ListarquestionComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  constructor(public route:ActivatedRoute){}
}
