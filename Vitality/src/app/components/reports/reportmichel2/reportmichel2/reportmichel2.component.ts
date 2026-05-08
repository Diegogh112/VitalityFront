import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ReviewService } from '../../../../services/review.service';
import { HealthobjectiveService } from '../../../../services/healthobjective.service';

@Component({
  selector: 'app-reportmichel1',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportmichel2.component.html',
  styleUrl: './reportmichel2.component.css'
})
export class Reportmichel2Component implements OnInit{
   barChartOptions: ChartOptions ={
    responsive:true,
  };
  barChartLabels:string[] = [];
  barChartType:ChartType = 'doughnut';
  barChartLegend=true;
  barChartData:ChartDataset[] = []

  constructor(private rS:HealthobjectiveService){}
  ngOnInit(): void {
    this.rS.getHealthObjetiveByUser().subscribe(data => {
      // Agrupar por username y contar objetivos por usuario
      const conteo = data.reduce((acc, item) => {
        acc[item.username] = (acc[item.username] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      this.barChartLabels = Object.keys(conteo);
      this.barChartData = [
        {
          data: Object.values(conteo),
          label: 'Cantidad de objetivos logrados',
          backgroundColor: ['blue', 'red', 'green', '#FFA500', '#30B81A', '#8064A2', '#4BACC6', '#C0504D'],
          borderColor: 'rgba(173,216,230,1)',
          borderWidth: 1,
        }
      ];
    });
  }
}