import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { HealthobjectiveService } from '../../../services/healthobjective.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-report-italo1',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportitalo1.component.html',
  styleUrl: './reportitalo1.component.css'
})
export class ReportItalo1Component implements OnInit{
  barChartOptions: ChartOptions ={
    responsive:true,
  };
  barChartLabels:string[] = [];
  barChartType:ChartType = 'doughnut';
  barChartLegend=true;
  barChartData:ChartDataset[] = []

  constructor(private hS:HealthobjectiveService){}
  ngOnInit(): void {
    this.hS.getObjectiveByUsers().subscribe(data=>{
      this.barChartLabels=data.map(item =>item.username)
      this.barChartData=[
      {
        data:data.map(item=>item.quantity),
        label:'Cantidad',
        backgroundColor:['blue','red','green','white','#30B81A',],
        borderColor:'rgba(173,216,230,1)',
        borderWidth:1,
      }
    ]
    
  })
}
}
