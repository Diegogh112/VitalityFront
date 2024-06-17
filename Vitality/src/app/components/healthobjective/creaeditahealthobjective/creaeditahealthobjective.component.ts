import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HealthObjective } from '../../../models/healthobjective';
import { HealthobjectiveService } from '../../../services/healthobjective.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-creaeditahealthobjective',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule],
  templateUrl: './creaeditahealthobjective.component.html',
  styleUrl: './creaeditahealthobjective.component.css'
})
export class CreaeditahealthobjectiveComponent {
  listaTipos: { value: string; viewValue: string }[] = [
    {
      value: 'Bajar de Peso',
      viewValue:
        'Bajar de Peso',
    },
    {
      value:
        'Ganar masa muscular',
      viewValue:
        'Ganar masa muscular',
    },
    {
      value:
        'Otro',
      viewValue:
        'Otro',
    },
  ];
  form: FormGroup = new FormGroup({});
  id:number=0;
  edicion:boolean=false;
  healthobjective:HealthObjective = new HealthObjective();
  users:Users[]=[]

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private hoS:HealthobjectiveService,
    private uS:UsersService,
  ) {}
  ngOnInit(): void {

    this.uS.list().subscribe(a=>{
      this.users=a;
    })

    this.route.params.subscribe((data:Params) =>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init()
    })

    this.form = this.formBuilder.group({
      codigo:[''],
      tipo: ['', Validators.required],
      usuario: ['', Validators.required],

    });
  }
  aceptar(): void {
    if (this.form.valid){
        this.healthobjective.idHealthObjective=this.form.value.codigo;
        this.healthobjective.typeObjective=this.form.value.tipo;
        this.healthobjective.user.id=this.form.value.usuario;
        if (this.edicion){
          this.hoS.update(this.healthobjective).subscribe((data)=>{
            this.hoS.list().subscribe((data)=>{
              this.hoS.setList(data);
            })
          })
          this.router.navigate(['Objetivo-de-salud']);
        }else{
        this.hoS.insert(this.healthobjective).subscribe(data=>{
          this.hoS.list().subscribe((data)=>{
            this.hoS.setList(data)
          })
        })
        this.router.navigate(['Objetivo-de-salud']);
      }
    }
  }

  cancelar():void{
    this.router.navigate(['Objetivo-de-salud']);
  }

  init(){
    if (this.edicion){
      this.hoS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idHealthObjective),
            tipo:new FormControl(data.typeObjective),
            usuario:new FormControl(data.user.id),
        })
      })
    }
  }

}
