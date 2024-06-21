import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ShoppingService } from '../../../../services/shopping.service';

@Component({
  selector: 'app-reportmichel1',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reportmichel1.component.html',
  styleUrl: './reportmichel1.component.css'
})
export class Reportmichel1Component implements OnInit{
   barChartOptions: ChartOptions ={
    responsive:true,
  };
  barChartLabels:string[] = [];
  barChartType:ChartType = 'doughnut';
  barChartLegend=true;
  barChartData:ChartDataset[] = []

  constructor(private sS:ShoppingService){}
  ngOnInit(): void {
    this.sS.getQuantityByShopping().subscribe(data=>{
      this.barChartLabels=data.map(item =>item.numOrderShopping)
      this.barChartData=[
      {
        data:data.map(item=>item.totalShopping),
        label:'Recomendaciones',
        backgroundColor:['blue','red','green','white','#30B81A',],
        borderColor:'rgba(173,216,230,1)',
        borderWidth:1,
      }
    ]
    
  })
}
}