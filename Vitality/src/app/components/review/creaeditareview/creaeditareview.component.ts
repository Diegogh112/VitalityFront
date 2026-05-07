import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Review } from '../../../models/review';
import { ReviewService } from '../../../services/review.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-creaeditareview',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './creaeditareview.component.html',
  styleUrl: './creaeditareview.component.css'
})
export class CreaeditareviewComponent {
  form: FormGroup = new FormGroup({});
  review:Review= new Review();
  id:number=0;
  edicion:boolean=false;
  users:Users[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private rS:ReviewService,
    private router:Router,
    private route:ActivatedRoute,
    private uS:UsersService
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
      puntuacion:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      comentario: ['',Validators.required],
      usuario: ['',Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid){
        this.review.idReview=this.form.value.codigo;
        this.review.punctuation=this.form.value.puntuacion;
        this.review.comment=this.form.value.comentario;
        this.review.user.id=this.form.value.usuario;

        if (this.edicion){
          this.rS.update(this.review).subscribe((data)=>{
            this.rS.list().subscribe((data)=>{
              this.rS.setList(data);
            })
          })
          this.router.navigate(['resenias']);
        }else{
        this.rS.insert(this.review).subscribe(data=>{
          this.rS.list().subscribe((data)=>{
            this.rS.setList(data)
          })
        })
        this.router.navigate(['resenias']);
      }
    }
  }


  cancelar():void{
    this.router.navigate(['resenias']);
  }

  init(){
    if (this.edicion){
      this.rS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idReview),
            puntuacion:new FormControl(data.punctuation),
            comentario:new FormControl(data.comment),
            usuario:new FormControl(data.user.id),
        })
      })
    }
  }
}