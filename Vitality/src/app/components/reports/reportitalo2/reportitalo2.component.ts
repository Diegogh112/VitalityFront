import { Component, OnInit } from '@angular/core';
import { HealthobjectiveService } from '../../../services/healthobjective.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-report-italo2',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './report-italo2.component.html',
  styleUrl: './report-italo2.component.css'
})
export class ReportItalo2Component implements OnInit{
  barChartOptions: ChartOptions ={
    responsive:true,
  };
  barChartLabels:string[] = [];
  //barChartType:ChartType = 'doughnut';
   barChartType: ChartType = 'pie';

 //barChartType: ChartType = 'line';

 //barChartType: ChartType = 'bar';

 //barChartType: ChartType = 'polarArea';
  barChartLegend=true;
  barChartData:ChartDataset[] = []

  constructor(private hS:HealthobjectiveService){}
  ngOnInit(): void {
    this.hS.getHealthObjectiveBySuscribedUsers().subscribe(data=>{
      this.barChartLabels=data.map(item =>item.username)
      this.barChartData=[
      {
        data:data.map(item=>item.quantity),
        label:'Cantidad de Objetivos de Salud',
        backgroundColor:['blue','red','green','white','#30B81A',],
        borderColor:'rgba(173,216,230,1)',
        borderWidth:1,
      }
    ]
    
  })
}
}
