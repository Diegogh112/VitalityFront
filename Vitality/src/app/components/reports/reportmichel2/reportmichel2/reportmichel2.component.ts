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
    this.rS.getHealthObjetiveByUser().subscribe(data=>{
      this.barChartLabels=data.map(item =>item.typeObjetive)
      this.barChartData=[
      {
        data:data.map(item=>item.username.length),
        label:'Cantidad de usuarios',
        backgroundColor:['blue','red','green','white','#30B81A',],
        borderColor:'rgba(173,216,230,1)',
        borderWidth:1,
      }
    ]
    
  })
}
}