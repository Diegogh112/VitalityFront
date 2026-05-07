import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-creaeditaproduct',
  standalone: true,
  imports: [    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule],
  templateUrl: './creaeditaproduct.component.html',
  styleUrl: './creaeditaproduct.component.css'
})
export class CreaeditaproductComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  product:Product= new Product();
  id:number=0;
  edicion:boolean=false;
  categories!:Category[];

  constructor(
    private formBuilder: FormBuilder,
    private pS:ProductService,
    private router:Router,
    private route:ActivatedRoute,
    private cS:CategoryService,
  ) {}
  ngOnInit(): void {

    this.cS.list().subscribe(categories=>{
      this.categories=categories;
    })

    this.route.params.subscribe((data:Params) =>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init()
    })

    this.form = this.formBuilder.group({
      codigo:[''],
      nombre: ['', Validators.required],
      precio: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      stock: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      categoria: ['',Validators.required],

    });
  }
  aceptar(): void {
    if (this.form.valid){
        this.product.idProduct=this.form.value.codigo;
        this.product.name=this.form.value.nombre;
        this.product.price=this.form.value.precio;
        this.product.stock=this.form.value.stock;
        this.product.category.idCategory=this.form.value.categoria;

        if (this.edicion){
          this.pS.update(this.product).subscribe((data)=>{
            this.pS.list().subscribe((data)=>{
              this.pS.setList(data);
            })
          })
          this.router.navigate(['productos']);
        }else{
        this.pS.insert(this.product).subscribe(data=>{
          this.pS.list().subscribe((data)=>{
            this.pS.setList(data)
          })
        })
        this.router.navigate(['productos']);
      }
    }
  }

  cancelar():void{
    this.router.navigate(['productos']);
  }

  init(){
    if (this.edicion){
      this.pS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idProduct),
            nombre:new FormControl(data.name),
            precio:new FormControl(data.price),
            stock:new FormControl(data.stock),
            categoria:new FormControl(data.category.idCategory),
        })
      })
    }
  }
}
