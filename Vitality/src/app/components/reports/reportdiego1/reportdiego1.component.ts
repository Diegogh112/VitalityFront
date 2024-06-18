import { Component, OnInit } from '@angular/core';
import {ChartOptions,ChartDataset,ChartType} from 'chart.js'
import { BaseChartDirective } from 'ng2-charts';
import { RecommendationService } from '../../../services/recommendation.service';
@Component({
  selector: 'app-reportdiego1',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportdiego1.component.html',
  styleUrl: './reportdiego1.component.css'
})
export class Reportdiego1Component implements OnInit{
  barChartOptions: ChartOptions ={
    responsive:true,
  };
  barChartLabels:string[] = [];
  barChartType:ChartType = 'doughnut';
  barChartLegend=true;
  barChartData:ChartDataset[] = []

  constructor(private rS:RecommendationService){}
  ngOnInit(): void {
    this.rS.getQuantityByUser().subscribe(data=>{
      this.barChartLabels=data.map(item =>item.username)
      this.barChartData=[
      {
        data:data.map(item=>item.quantityRecommendation),
        label:'Recomendaciones',
        backgroundColor:['blue','red','green','white','#30B81A',],
        borderColor:'rgba(173,216,230,1)',
        borderWidth:1,
      }
    ]
    
  })
}
}
