import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaranswerComponent } from '../answer/listaranswer/listaranswer.component';
import { ListarhealthobjectiveComponent } from './listarhealthobjective/listarhealthobjective.component';

@Component({
  selector: 'app-healthobjective',
  standalone: true,
  imports: [RouterOutlet,ListarhealthobjectiveComponent],
  templateUrl: './healthobjective.component.html',
  styleUrl: './healthobjective.component.css'
})
export class HealthobjectiveComponent implements OnInit{
  constructor(public route:ActivatedRoute){
    
  }
  ngOnInit(): void {
    
  }
}
