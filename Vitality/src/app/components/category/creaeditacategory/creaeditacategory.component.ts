import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-creaeditacategory',
  standalone: true,
  imports: [    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule],
  templateUrl: './creaeditacategory.component.html',
  styleUrl: './creaeditacategory.component.css'
})
export class CreaeditacategoryComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  category:Category= new Category();
  id:number=0;
  edicion:boolean=false

  constructor(
    private formBuilder: FormBuilder,
    private cS:CategoryService,
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
        this.category.idCategory=this.form.value.codigo;
        this.category.typeCategory=this.form.value.nombre;
        this.category.descriptionCategory=this.form.value.descripcion;

        if (this.edicion){
          this.cS.update(this.category).subscribe((data)=>{
            this.cS.list().subscribe((data)=>{
              this.cS.setList(data);
            })
            this.router.navigate(['categorias']);
          })
        }else{
        this.cS.insert(this.category).subscribe(data=>{
          this.cS.list().subscribe((data)=>{
            this.cS.setList(data)
          })
          this.router.navigate(['categorias']);
        })

      }
    }
  }

  cancelar():void {
    this.router.navigate(['categorias']);
  }

  init(){
    if (this.edicion){
      this.cS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idCategory),
            nombre:new FormControl(data.typeCategory),
            descripcion:new FormControl(data.descriptionCategory),
        })
      })
    }
  }

}
