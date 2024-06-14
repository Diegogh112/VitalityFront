import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HealthObjective } from '../../../models/healthobjective';
import { ActivatedRoute, Params, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HealthobjectiveService } from '../../../services/healthobjective.service'; 
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-creaeditahealthobjective',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './creaeditahealthobjective.component.html',
  styleUrl: './creaeditahealthobjective.component.css'
})
export class CreaeditahealthobjectiveComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  healthObjective:HealthObjective=new HealthObjective();
  mensaje:string="";
  id:number=0;
  edicion:boolean=false;
  listaUsuario:Users[]=[];

  constructor (private formBuilder:FormBuilder, private hS:HealthobjectiveService, private router: Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form=this.formBuilder.group({
      codigo:[''],
      tipo:[''],
      user:[''],
    })
  }
  aceptar():void{
    if (this.form.valid){this.healthObjective.idHealthObjective=this.form.value.codigo; this.healthObjective.typeObjective=this.form.value.consulta;
      if (this.edicion){this.hS.update(this.healthObjective).subscribe(()=>{this.hS.list().subscribe((data)=>{this.hS.setList(data);});});}
      else {this.hS.insert(this.healthObjective).subscribe((data) => {
        this.hS.list().subscribe((data) => {
          this.hS.setList(data);
        });
      });}
        this.router.navigate(['Objetivo-de-salud']);
    }
  }

  init() {
    if (this.edicion) {
      this.hS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idHealthObjective),
          tipo: new FormControl(data.typeObjective),
          user: new FormControl(data.user)
        });
      });
    }
  }
}
