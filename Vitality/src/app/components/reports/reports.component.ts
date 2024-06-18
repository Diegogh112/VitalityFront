import { Component, OnInit } from '@angular/core';
import { Reportdiego1Component } from './reportdiego1/reportdiego1.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [Reportdiego1Component,RouterOutlet],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
 ngOnInit(): void {
     
 }
}
