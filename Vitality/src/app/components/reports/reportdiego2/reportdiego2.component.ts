import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChartOptions, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { RecommendationService } from '../../../services/recommendation.service';
import { UsersService } from '../../../services/users.service';
import { MatFormField, MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-reportdiego1',
  standalone: true,
  imports: [
    BaseChartDirective,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './reportdiego2.component.html',
  styleUrl: './reportdiego2.component.css',
})
export class Reportdiego2Component implements OnInit {
  barChartOptions: ChartOptions ={
    responsive:true,
  };
  barChartLabels:string[] = [];
  //barChartType:ChartType = 'doughnut';
  barChartLegend=true;
  barChartData:ChartDataset[] = []
  //barChartType: ChartType = 'pie';

   //barChartType: ChartType = 'line';
  
   barChartType: ChartType = 'bar';
  
   //barChartType: ChartType = 'polarArea';

  constructor(private cS:CategoryService){}
  ngOnInit(): void {
    this.cS.getSumProductsByType().subscribe(data=>{
      this.barChartLabels=data.map(item =>item.nameCategory)
      this.barChartData=[
      {
        data:data.map(item=>item.total),
        label:'Cantidad de productos comprados',
        backgroundColor:['darkyellow','red','green','white','#30B81A',],
        borderColor:'rgba(173,216,230,1)',
        borderWidth:1,
      }
    ]
    
  })
}
}