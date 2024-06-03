import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarcategoryComponent } from './listarcategory/listarcategory.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterOutlet,ListarcategoryComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  constructor(public route:ActivatedRoute){
  }
  ngOnInit(): void {}
}
