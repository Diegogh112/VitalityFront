import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { RecommendationService } from '../../../services/recommendation.service';
import { Recommendation } from '../../../models/recommendation';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-creaeditarecommendation',
  standalone: true,
  imports: [    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule],
  templateUrl: './creaeditarecommendation.component.html',
  styleUrl: './creaeditarecommendation.component.css'
})
export class CreaeditarecommendationComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  rec:Recommendation= new Recommendation();
  users:any[]=[]


  constructor(private formBuilder: FormBuilder,
    private rS:RecommendationService,
    private router:Router,
    private uS:UsersService,
  ) {}



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      descripcion: ['', Validators.required],
      usuario: ['', Validators.required]

    });
    this.uS.getList().subscribe((data: any[]) => {
      this.users = data;
    });
  }
  aceptar(): void {
    if (this.form.valid){
        this.rec.descriptionRecommendation=this.form.value.descripcion;
        this.rec.user = this.form.value.usuario;
        this.rS.insert(this.rec).subscribe(data=>{
          this.rS.list().subscribe((data)=>{
            this.rS.setList(data)
          })
        })
        this.router.navigate(['recomendaciones']);

    }
  }
}
