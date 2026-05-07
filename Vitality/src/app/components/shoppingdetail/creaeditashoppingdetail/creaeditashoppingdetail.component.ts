import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ShoppingDetail } from '../../../models/shoppingdetail';
import { Product } from '../../../models/product';
import { Shopping } from '../../../models/shopping';
import { ProductService } from '../../../services/product.service';
import { ShoppingdetailService } from '../../../services/shoppingdetail.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService } from '../../../services/shopping.service';

@Component({
  selector: 'app-creaeditashoppingdetail',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    CommonModule,
    MatButtonModule],
  templateUrl: './creaeditashoppingdetail.component.html',
  styleUrl: './creaeditashoppingdetail.component.css'
})
export class CreaeditashoppingdetailComponent {
  form: FormGroup = new FormGroup({});
  products!:Product[];
  shoppings!:Shopping[] ;
  id:number=0;
  edicion:boolean=false;
  detalle:ShoppingDetail = new ShoppingDetail();

  constructor(
    private formBuilder: FormBuilder,
    private pS:ProductService,
    private sS:ShoppingService,
    private router:Router,
    private route:ActivatedRoute,
    private sdS:ShoppingdetailService,
  ) {}
  ngOnInit(): void {

    this.pS.list().subscribe(data=>{
      this.products=data;
    })
    this.sS.list().subscribe(data=>{
      this.shoppings=data;
    })

    this.route.params.subscribe((data:Params) =>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init()
    })

    this.form = this.formBuilder.group({
      codigo:[''],
      cantidad: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      subtotal: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      producto: ['',Validators.required],
      compra: ['',Validators.required]

    });

  }
  aceptar(): void {
    if (this.form.valid){
        this.detalle.idShoppingDetail=this.form.value.codigo;
        this.detalle.quantityShoppingDetail=this.form.value.cantidad;
        this.detalle.subtotalShoppingDetail=this.form.value.subtotal;
        this.detalle.product.idProduct=this.form.value.producto;
        this.detalle.shopping.idShopping=this.form.value.compra;

        if (this.edicion){
          this.sdS.update(this.detalle).subscribe((data)=>{
            this.sdS.list().subscribe((data)=>{
              this.sdS.setList(data);
            })
          })
          this.router.navigate(['detallesCompra']);
        }else{
        this.sdS.insert(this.detalle).subscribe(data=>{
          this.sdS.list().subscribe((data)=>{
            this.sdS.setList(data)
          })
        })
        this.router.navigate(['detallesCompra']);
      }
    }
  }

  cancelar():void{
    this.router.navigate(['detallesCompra']);
  }

  init(){
    if (this.edicion){
      this.sdS.listid(this.id).subscribe((data)=>{
        this.form=new FormGroup({
            codigo:new FormControl(data.idShoppingDetail),
            cantidad:new FormControl(data.quantityShoppingDetail),
            subtotal:new FormControl(data.subtotalShoppingDetail),
            producto:new FormControl(data.product.idProduct),
            compra:new FormControl(data.shopping.idShopping),
        })
      })
    }
  }
}
