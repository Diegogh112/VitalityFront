import { Component, OnInit } from '@angular/core';
import { Reportdiego1Component } from './reportdiego1/reportdiego1.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Reportfrank01Component } from './reportfrank01/reportfrank01.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [Reportdiego1Component,RouterOutlet,Reportfrank01Component],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
 ngOnInit(): void {
     
 }
}
