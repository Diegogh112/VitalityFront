import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { UsersService } from '../../../services/users.service';
import { PunctuationByUserDTO } from '../../../models/punctuationByUserDTO';

@Component({
  selector: 'app-reportmaria1',
  templateUrl: './reportmaria1.component.html',
  styleUrls: ['./reportmaria1.component.css']
})
export class Reportmaria1Component implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private uS: UsersService) {}

  ngOnInit(): void {
    this.uS.getUsersReviewSummary().subscribe((data: PunctuationByUserDTO[]) => {
      console.log(data);
      if (data) {
        this.barChartLabels = data.map(item => item.username);
        this.barChartData = [
          {
            data: data.map(item => item.sumPunctuations),
            label: 'Puntuación por Usuario',
            backgroundColor: '#009688', // Color de fondo
            borderColor: 'rgba(0, 150, 136, 1)', // Color del borde
            borderWidth: 1,
          },
          {
            data: data.map(item => item.averageReview),
            label: 'Revisión Promedio',
            backgroundColor: '#FFC107', // Color de fondo
            borderColor: 'rgba(255, 193, 7, 1)', // Color del borde
            borderWidth: 1,
          }
        ];
      }
    });
  }
}
