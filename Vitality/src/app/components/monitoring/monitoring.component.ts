import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarmonitoringComponent } from './listarmonitoring/listarmonitoring.component';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [RouterOutlet,ListarmonitoringComponent],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.css'
})
export class MonitoringComponent {
  constructor(public route:ActivatedRoute){}
}
