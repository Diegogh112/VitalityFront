import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Role } from '../../../models/role';
import { RoleService } from '../../../services/role.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-creaeditarole',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule],
  templateUrl: './creaeditarole.component.html',
  styleUrl: './creaeditarole.component.css'
})
export class CreaeditaroleComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  role:Role= new Role();
  id:number=0;
  edicion:boolean=false;
  users:Users[]=[];
  listaRoles: { value: string; viewValue: string }[] = [
    {
      value:
        'ADMIN',
      viewValue:
      'ADMIN',

    },
    {
      value:
      'PROFESIONAL',

      viewValue:
      'PROFESIONAL',

    },
    {
      value:
      'CLIENTE',
      viewValue:
      'CLIENTE',
    },
  
  ];
  constructor(
    private formBuilder: FormBuilder,
    private rS:RoleService,
    private router:Router,
    private route:ActivatedRoute,
    private uS:UsersService,
  ) {}
  ngOnInit(): void {

    this.uS.list().subscribe(users=>{
      this.users=users;
    })

    this.route.params.subscribe((data:Params) =>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init()
    })

    this.form = this.formBuilder.group({
      codigo:[''],
      nombre: ['', Validators.required],
      usuario: ['',Validators.required],

    });
  }
  aceptar(): void {
    if (this.form.valid){
        this.role.id=this.form.value.codigo;
        this.role.rol=this.form.value.nombre;
        this.role.user.id=this.form.value.usuario;

        if (this.edicion){
          this.rS.update(this.role).subscribe((data)=>{
            this.rS.list().subscribe((data)=>{
              this.rS.setList(data);
            })
          })
          this.router.navigate(['roles']);
        }else{
        this.rS.insert(this.role).subscribe(data=>{
          this.rS.list().subscribe((data)=>{
            this.rS.setList(data)
          })
        })
        this.router.navigate(['roles']);
      }
    }
  }

  cancelar():void{
    this.router.navigate(['roles']);
  }
  init(){
    if (this.edicion){
      this.rS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.id),
            nombre:new FormControl(data.rol),
            usuario:new FormControl(data.user.id)
        })
      })
    }
  }
}
