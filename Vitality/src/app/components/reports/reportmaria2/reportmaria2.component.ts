import { Component, OnInit } from '@angular/core';
import {
  ChartDataset,
  ChartOptions,
  ChartType,
} from './../../../../../node_modules/chart.js/dist/types/index.d';
import { BaseChartDirective } from 'ng2-charts';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-reportmaria2',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportmaria2.component.html',
  styleUrl: './reportmaria2.component.css'
})
export class Reportmaria2Component implements OnInit{
  barChartOptions:ChartOptions={responsive:true};
  barChartLabels: string[] = [];
//barChartType: ChartType = 'pie';
//barChartType: ChartType = 'doughnut';
//barChartType: ChartType = 'line';
barChartType: ChartType = 'bar';
//barChartType: ChartType = 'polarArea';

barChartLegend = true;
barChartData: ChartDataset[] = [];

constructor(private cS: CategoryService) {}

ngOnInit(): void {
  this.cS.findTotalShoppingAmountToDate().subscribe((data) => {
    this.barChartLabels = data.map((item) => item.dateShopping);
    this.barChartData = [
      {
        data: data.map((item) => item.count),
        label: 'cantidad de compras por año',
        backgroundColor: [
          '#009g88',
          '#4169c7',
          '#C0504D',
          '#4169E9',
          '#0000CD',
          '#9BBB59',
          '#8064A2',
          '#4BACC6',
          '#4F81BC',
        ],
        borderColor: 'rgba(173, 216, 230, 1)',
        borderWidth: 1,
      },
    ];
  });
}
}
