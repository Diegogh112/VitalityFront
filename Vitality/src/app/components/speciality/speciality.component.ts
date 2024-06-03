import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarspecialityComponent } from './listarspeciality/listarspeciality.component';

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
