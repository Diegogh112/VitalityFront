import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Monitoring } from '../../../models/monitoring';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MonitoringService } from '../../../services/monitoring.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Users } from '../../../models/users';
import { HealthObjective } from '../../../models/healthobjective';
import { HealthobjectiveService } from '../../../services/healthobjective.service';

@Component({
  selector: 'app-creaeditamonitoring',
  standalone: true,
  providers: [provideNativeDateAdapter()],

  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,MatDatepickerModule],
  templateUrl: './creaeditamonitoring.component.html',
  styleUrl: './creaeditamonitoring.component.css'
})
export class CreaeditamonitoringComponent implements OnInit{

  estados: { value: string; viewValue: string }[] = [
    {
      value: 'En Proceso',
      viewValue:
        'En Proceso'
    },
    {
      value:
        'Finalizado',
      viewValue:
        'Finalizado',
    },
    {
      value:
        'Cancelado',
      viewValue:
        'Cancelado',
    },
  ];

  form: FormGroup = new FormGroup({});
  monitoring:Monitoring= new Monitoring();
  id:number=0;
  edicion:boolean=false
  objetivos:HealthObjective[]=[];
  start:Date = new Date();
  end:Date = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private mS:MonitoringService,
    private hoS:HealthobjectiveService,
  ) {}





  ngOnInit(): void {

    this.hoS.list().subscribe(a=>{
      this.objetivos=a;
    })

this.route.params.subscribe((data:Params) =>{
  this.id=data['id'];
  this.edicion=data['id']!=null;
  this.init()
})

    this.form = this.formBuilder.group({
      codigo:[''],
      start: ['', Validators.required],
      end: ['', Validators.required],
      estado: ['', Validators.required],
      historial: ['', Validators.required],
      plan: ['', Validators.required],
      objetivo: ['', Validators.required],


    });
  }
  aceptar(): void {
    if (this.form.valid){
      
  
      // Asigna las fechas al objeto monitoring solo si son de tipo Date
        this.monitoring.idMonitoring=this.form.value.codigo;
        this.monitoring.statusMonitoring=this.form.value.estado;
        this.monitoring.historyMonitoring=this.form.value.historial;
        this.monitoring.nutritionalPlanMonitoring=this.form.value.plan;
        this.monitoring.healthObjective.idHealthObjective=this.form.value.objetivo;
        this.monitoring.starDateMonitoring=this.form.value.start;
        this.monitoring.endDateMonitoring=this.form.value.end;



        if (this.edicion){
          this.mS.update(this.monitoring).subscribe((data)=>{
            this.mS.list().subscribe((data)=>{
              this.mS.setList(data);
            })
            this.router.navigate(['seguimiento']);
          })
        }else{
        this.mS.insert(this.monitoring).subscribe(data=>{
          this.mS.list().subscribe((data)=>{
            this.mS.setList(data)
          })
          this.router.navigate(['seguimiento']);
        })

      }
    }
  }

  cancelar():void {
    this.router.navigate(['seguimiento']);
  }

  init(){
    if (this.edicion){
      this.mS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idMonitoring),
            start:new FormControl(data.starDateMonitoring),
            end:new FormControl(data.endDateMonitoring),
            estado:new FormControl(data.statusMonitoring),
            historial:new FormControl(data.historyMonitoring),
            plan:new FormControl(data.nutritionalPlanMonitoring),
            objetivo:new FormControl(data.healthObjective.idHealthObjective),
       
          })
      })
    }
  }
}