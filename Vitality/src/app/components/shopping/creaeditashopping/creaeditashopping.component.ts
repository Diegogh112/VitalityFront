/*Creaeditacompra */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Shopping } from '../../../models/shopping';
import { ShoppingService } from '../../../services/shopping.service';
@Component({
  selector: 'app-creaeditashopping',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './creaeditashopping.component.html',
  styleUrl: './creaeditashopping.component.css'
})

export class CreaeditashoppingComponent {
  form: FormGroup = new FormGroup({});
  shopping:Shopping= new Shopping();
  id:number=0;
  edicion:boolean=false

  constructor(
    private formBuilder: FormBuilder,
    private sS:ShoppingService,
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
      fecha: [''],
      total: [''],
      usuario: [''],
    });
  }
  aceptar(): void {
    if (this.form.valid){
        this.shopping.idShopping=this.form.value.codigo;
        this.shopping.dateShopping=this.form.value.fecha;
        this.shopping.totalShopping=this.form.value.total;
        this.shopping.user=this.form.value.usuario;

        if (this.edicion){
          this.sS.update(this.shopping).subscribe((data)=>{
            this.sS.list().subscribe((data)=>{
              this.sS.setList(data);
            })
          })
          this.router.navigate(['compras']);
        }else{
        this.sS.insert(this.shopping).subscribe(data=>{
          this.sS.list().subscribe((data)=>{
            this.sS.setList(data)
          })
        })
        this.router.navigate(['compras']);
      }
    }
  }

  init(){
    if (this.edicion){
      this.sS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idShopping),
            fecha:new FormControl(data.dateShopping),
            total:new FormControl(data.totalShopping),
            usuario:new FormControl(data.user),
        })
      })
    }
  }
}
