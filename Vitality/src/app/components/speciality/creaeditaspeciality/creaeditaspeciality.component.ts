import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SpecialityService } from '../../../services/speciality.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Speciality } from '../../../models/speciality';

@Component({
  selector: 'app-creaeditaspeciality',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule],
  templateUrl: './creaeditaspeciality.component.html',
  styleUrl: './creaeditaspeciality.component.css'
})
export class CreaeditaspecialityComponent {
  form: FormGroup = new FormGroup({});
  speciality:Speciality= new Speciality();
  id:number=0;
  edicion:boolean=false

  constructor(
    private formBuilder: FormBuilder,
    private sS:SpecialityService,
    private router:Router,
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {

this.route.params.subscribe((data:Params) =>{
  this.id=data['id'];
  this.edicion=data['id']!=null;
  this.init()
})

    this.form = this.formBuilder.group({
      codigo:[''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],

    });
  }
  aceptar(): void {
    if (this.form.valid){
        this.speciality.idspecialty=this.form.value.codigo;
        this.speciality.specialization=this.form.value.nombre;
        this.speciality.profileDescription=this.form.value.descripcion;

        if (this.edicion){
          this.sS.update(this.speciality).subscribe((data)=>{
            this.sS.list().subscribe((data)=>{
              this.sS.setList(data);
            })
          })
          this.router.navigate(['especialidades']);
        }else{
        this.sS.insert(this.speciality).subscribe(data=>{
          this.sS.list().subscribe((data)=>{
            this.sS.setList(data)
          })
        })
        this.router.navigate(['especialidades']);
      }
    }
  }

  cancelar():void {
    this.router.navigate(['especialidades']);
  }

  init(){
    if (this.edicion){
      this.sS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idspecialty),
            nombre:new FormControl(data.specialization),
            descripcion:new FormControl(data.profileDescription),
        })
      })
    }
  }
}
