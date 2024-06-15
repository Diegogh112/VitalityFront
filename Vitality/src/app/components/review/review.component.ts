import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarreviewComponent } from './listarreview/listarreview.component';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    RouterOutlet,
    ListarreviewComponent
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
ngOnInit(): void {}
}
