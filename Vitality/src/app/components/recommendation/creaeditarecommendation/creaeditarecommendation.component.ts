import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecommendationService } from '../../../services/recommendation.service';
import { Recommendation } from '../../../models/recommendation';
import { UsersService } from '../../../services/users.service';
import { Users } from '../../../models/users';


@Component({
  selector: 'app-creaeditarecommendation',
  standalone: true,
  imports: [    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    FormsModule
  
  ],
  templateUrl: './creaeditarecommendation.component.html',
  styleUrl: './creaeditarecommendation.component.css'
})
export class CreaeditarecommendationComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  rec:Recommendation= new Recommendation();
  users!:Users[]
  edicion:boolean=false
  id:number=0;
  constructor(private formBuilder: FormBuilder,
    private rS:RecommendationService,
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
      usuario: ['', Validators.required]

    });
    this.uS.list().subscribe(users=>{
      this.users=users;
    })
  }
  
  aceptar(): void {
    if (this.form.valid){
        this.rec.idRecommendation=this.form.value.codigo;
        this.rec.descriptionRecommendation=this.form.value.descripcion;
        this.rec.user.idUser=this.form.value.usuario;
        

        if (this.edicion){
          this.rS.update(this.rec).subscribe((data)=>{
            this.rS.list().subscribe((data)=>{
              this.rS.setList(data);
            })
            this.router.navigate(['recomendaciones']);
          })
        }else{
        this.rS.insert(this.rec).subscribe(data=>{
          this.rS.list().subscribe((data)=>{
            this.rS.setList(data)
          })
          this.router.navigate(['recomendaciones']);
        })

      }
    }
  }

  cancelar():void {
    this.router.navigate(['recomendaciones']);
  }
  init(){
    
    if (this.edicion){
  
      this.rS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idRecommendation),
            descripcion:new FormControl(data.descriptionRecommendation),
            usuario:new FormControl(data.user.idUser)
            
          })
          
      })
    }
    
  }

}
