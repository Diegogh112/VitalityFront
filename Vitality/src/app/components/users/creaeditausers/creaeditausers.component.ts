import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../models/users';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-creaeditausers',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './creaeditausers.component.html',
  styleUrl: './creaeditausers.component.css'
})
export class CreaeditausersComponent {
  form: FormGroup = new FormGroup({});
  users:Users= new Users();
  id:number=0;
  edicion:boolean=false

  constructor(
    private formBuilder: FormBuilder,
    private uS:UsersService,
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
      correo: ['', [Validators.required,Validators.email]],
      contrasenia: ['', Validators.required],
      direccion: ['', Validators.required],
      peso: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      altura: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      suscripcion: [''],
      esprofesional: [''],

    });
  }
  aceptar(): void {
    if (this.form.valid){
        this.users.id=this.form.value.codigo;
        this.users.username=this.form.value.nombre;
        this.users.email=this.form.value.correo;
        this.users.password=this.form.value.contrasenia;
        this.users.address=this.form.value.direccion;
        this.users.weight=this.form.value.peso;
        this.users.height=this.form.value.altura;
        this.users.subscription=this.form.value.suscripcion;
        this.users.healthProfessional=this.form.value.esprofesional;


        if (this.edicion){
          this.uS.update(this.users).subscribe((data)=>{
            this.uS.list().subscribe((data)=>{
              this.uS.setList(data);
            })
          })
          this.router.navigate(['usuarios']);
        }else{
        this.uS.insert(this.users).subscribe(data=>{
          this.uS.list().subscribe((data)=>{
            this.uS.setList(data)
          })
        })
        this.router.navigate(['usuarios']);
      }
    }
  }

  cancelar():void {
    this.router.navigate(['usuarios']);
  }

  init(){
    if (this.edicion){
      this.uS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.id),
            nombre:new FormControl(data.username),
            correo:new FormControl(data.email),
            contrasenia:new FormControl(data.password),
            direccion:new FormControl(data.address),
            peso:new FormControl(data.weight),
            altura:new FormControl(data.height),
            suscripcion:new FormControl(data.subscription),
            esprofesional:new FormControl(data.healthProfessional),


        })
      })
    }
  }
}
