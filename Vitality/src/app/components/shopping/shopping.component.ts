import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarshoppingComponent } from './listarshopping/listarshopping.component';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [RouterOutlet,ListarshoppingComponent,],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit{
constructor(public route:ActivatedRoute){}
ngOnInit(): void {}
}
