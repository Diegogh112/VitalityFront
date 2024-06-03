import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarshoppingComponent } from './listarshopping/listarshopping.component';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [RouterOutlet,ListarshoppingComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {
  constructor(public route:ActivatedRoute){}
}
