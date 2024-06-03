import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarshoppingdetailComponent } from './listarshoppingdetail/listarshoppingdetail.component';

@Component({
  selector: 'app-shoppingdetail',
  standalone: true,
  imports: [RouterOutlet,ListarshoppingdetailComponent],
  templateUrl: './shoppingdetail.component.html',
  styleUrl: './shoppingdetail.component.css'
})
export class ShoppingdetailComponent {
constructor(public route:ActivatedRoute){}
}
