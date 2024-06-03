import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarproductComponent } from './listarproduct/listarproduct.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet,ListarproductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 constructor(public route:ActivatedRoute){}
}
