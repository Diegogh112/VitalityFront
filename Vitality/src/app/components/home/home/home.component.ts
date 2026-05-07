import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexLegend,
  ApexResponsive,
  ApexStroke,
  ApexPlotOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, NgApexchartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Donut chart — Descargas
  donutSeries: ApexNonAxisChartSeries = [5, 3, 2];
  donutLabels: string[] = ['Descargados', 'Desinstalados', 'Ninguno'];
  donutColors: string[] = ['#4caf50', '#ff5252', '#bdbdbd'];
  donutChart: ApexChart = { type: 'donut', height: 280 };
  chartLegend: ApexLegend = { position: 'bottom' };
  chartResponsive: ApexResponsive[] = [{ breakpoint: 480, options: { chart: { width: 200 } } }];

  // Bar chart — Usuarios por Rol
  barSeries: ApexAxisChartSeries = [{ name: 'Usuarios', data: [12, 5, 8] }];
  barChart: ApexChart = { type: 'bar', height: 280 };
  barXaxis: ApexXAxis = { categories: ['Admin', 'Profesional', 'Cliente'] };
  barColors: string[] = ['#4caf50'];
  barPlotOptions: ApexPlotOptions = { bar: { borderRadius: 6, columnWidth: '50%' } };

  // Line chart — Compras por Mes
  lineSeries: ApexAxisChartSeries = [{ name: 'Compras', data: [4, 7, 5, 10, 8, 13, 9] }];
  lineChart: ApexChart = { type: 'line', height: 280 };
  lineXaxis: ApexXAxis = { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'] };
  lineColors: string[] = ['#4caf50'];
  lineStroke: ApexStroke = { curve: 'smooth', width: 3 };
}
