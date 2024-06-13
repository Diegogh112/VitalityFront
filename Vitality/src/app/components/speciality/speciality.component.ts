import { Component } from '@angular/core';
import { ListarspecialityComponent } from './listarspeciality/listarspeciality.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-speciality',
  standalone: true,
  imports: [RouterOutlet,ListarspecialityComponent],
  templateUrl: './speciality.component.html',
  styleUrl: './speciality.component.css'
})
export class SpecialityComponent {
constructor(public route:ActivatedRoute){}
}
