import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Answer } from '../../../models/answer';
import { AnswerService } from '../../../services/answer.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-creaeditaanswer',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    NgIf,RouterLink],
  templateUrl: './creaeditaanswer.component.html',
  styleUrl: './creaeditaanswer.component.css'
})
export class CreaeditaanswerComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  answer:Answer= new Answer();
  users:Users[]=[];
  edicion:boolean=false;
  id:number=0;
  constructor(private formBuilder: FormBuilder,
    private aS:AnswerService,
    private router:Router,
    private uS:UsersService,
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
      descripcion: ['', Validators.required],
      usuario: ['', Validators.required],
      
    });

    this.uS.list().subscribe((data) =>{
      this.users=data;
    });

  }

  aceptar(): void {
    if (this.form.valid){
        this.answer.idAnswer=this.form.value.codigo;
        this.answer.solution=this.form.value.descripcion;
        this.answer.user.idUser=this.form.value.usuario;
        

        if (this.edicion){
          this.aS.update(this.answer).subscribe((data)=>{
            this.aS.list().subscribe((data)=>{
              this.aS.setList(data);
            });
          });
        }else{
        this.aS.insert(this.answer).subscribe(data=>{
          this.aS.list().subscribe((data)=>{
            this.aS.setList(data)
          });
        });
      }
      this.router.navigate(['Respuesta']);
    }
  }

  cancelar():void {
    this.router.navigate(['Respuesta']);
  }
  init(){
    
    if (this.edicion){
  
      this.aS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idAnswer),
            descripcion:new FormControl(data.solution),
            usuario:new FormControl(data.user.idUser)
            
          })
          
      })
    }
    
  }
}
